// app/api/translate/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { model, text, sourceLang, targetLang, debug } = await request.json();

        if (!model || !text || !sourceLang || !targetLang) {
            return NextResponse.json(
                { error: "Missing parameters" },
                { status: 400 }
            );
        }

        // Remove the suffix ":latest" only if it appears exactly; otherwise, leave the model name unchanged.
        const effectiveModel = model.endsWith(":latest")
            ? model.slice(0, model.length - 7)
            : model;

        const messages = [
            {
                role: "system",
                content:
                    `You are an extremely precise and faithful translation assistant.
Your task is to translate the provided text from ${sourceLang} to ${targetLang} with absolute accuracy.
Your translation must:
- Be formatted exclusively as follows:
  <translation>The translated text</translation>
- Contain only the translated text inside the tags without any additional commentary, explanation, or extraneous content.
- Be grammatically correct, using proper syntax and vocabulary that exists in the target language.
- Verify that all terms used are correct and conform to the standard vocabulary of the target language, ensuring no invented or inaccurate words are present.
- Maintain the original context, tone, and meaning of the input text precisely.

Examples:
1. Input: Translate from English to Italian: "Hello"
   Correct Output: <translation>Ciao</translation>
2. Input: Translate from Italian to English: "Buongiorno"
   Correct Output: <translation>Good morning</translation>

Please ensure the translation is verified for grammatical correctness and accurate term usage in ${targetLang}.`
            },
            {
                role: "user",
                content: `Translate from ${sourceLang} to ${targetLang}: ${text}`
            }
        ];

        const ollamaResponse = await fetch("http://localhost:11434/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: effectiveModel,
                messages,
                stream: false
            })
        });

        if (!ollamaResponse.ok) {
            const errMsg = await ollamaResponse.text();
            return NextResponse.json(
                { error: `Ollama Error: ${errMsg}` },
                { status: ollamaResponse.status }
            );
        }

        const ollamaData = await ollamaResponse.json();

        let translatedText = "";
        let aiThought = "";
        if (ollamaData.message && ollamaData.message.content) {
            const content = ollamaData.message.content;
            // Extract the translation block that does NOT include <think> or </think> inside.
            const translationRegex = /<translation>((?:(?!<think>|<\/think>)[\s\S])+)<\/translation>/i;
            const translationMatch = content.match(translationRegex);
            if (translationMatch && translationMatch[1]) {
                translatedText = translationMatch[1].trim();
            } else {
                translatedText = "Translation format incorrect.";
            }
            // Extract the AI thought block from <think> tags, if present.
            const thinkRegex = /<think>([\s\S]*?)<\/think>/i;
            const thinkMatch = content.match(thinkRegex);
            if (thinkMatch && thinkMatch[1]) {
                aiThought = thinkMatch[1].trim();
            }
        } else {
            translatedText = "No translation available.";
        }

        if (debug === true) {
            return NextResponse.json({ translatedText, aiThought, rawResponse: ollamaData });
        }

        return NextResponse.json({ translatedText, aiThought });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Internal server error" },
            { status: 500 }
        );
    }
}
