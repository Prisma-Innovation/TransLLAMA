// components/TranslationForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe, ArrowRight, Loader2, ChevronDown } from "lucide-react";

export default function TranslationForm() {
  const { t } = useLanguage();
  const [availableModels, setAvailableModels] = useState<any[]>([]);
  const [sourceText, setSourceText] = useState("");
  const [mainTranslation, setMainTranslation] = useState("");
  const [aiThought, setAiThought] = useState("");
  const [sourceLang, setSourceLang] = useState("it");
  const [targetLang, setTargetLang] = useState("en");
  const [selectedModel, setSelectedModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugMode, setDebugMode] = useState(false);
  const [debugResponse, setDebugResponse] = useState<any>(null);
  const [showThought, setShowThought] = useState(false);
  const [languageList, setLanguageList] = useState<Array<{ code: string; name: string }>>([]);

  // Fetch models from the API (run only on mount)
  useEffect(() => {
    async function fetchModels() {
      try {
        const res = await fetch("/api/models");
        if (!res.ok) {
          throw new Error(t("errorLoadingModels"));
        }
        const data = await res.json();
        setAvailableModels(data.models);
        // Set the default selected model only if none has been set yet
        setSelectedModel((prev) =>
          prev || (data.models && data.models.length > 0 ? data.models[0].model : "")
        );
      } catch (err: any) {
        console.error(err);
      }
    }
    fetchModels();
  }, [t]);

  // Fetch languages from the backend
  useEffect(() => {
    async function fetchLanguages() {
      try {
        const res = await fetch("/api/languages");
        if (!res.ok) {
          throw new Error("Error fetching languages");
        }
        const data = await res.json();
        setLanguageList(data.languages);
      } catch (err: any) {
        console.error(err);
      }
    }
    fetchLanguages();
  }, []);

  const handleTranslate = async () => {
    setLoading(true);
    setError(null);
    setMainTranslation("");
    setAiThought("");
    setDebugResponse(null);
    setShowThought(false);

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: selectedModel,
          text: sourceText,
          sourceLang,
          targetLang,
          debug: debugMode
        })
      });

      if (!res.ok) {
        throw new Error(t("translationError"));
      }

      const data = await res.json();
      setMainTranslation(data.translatedText);
      setAiThought(data.aiThought || "");
      if (debugMode) {
        setDebugResponse(data.rawResponse);
      }
    } catch (err: any) {
      setError(err.message || t("translationError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium mb-1" htmlFor="model-select">
            {t("modelSelector")}
          </label>
          <select
            id="model-select"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {availableModels.length > 0 ? (
              availableModels.map((modelObj) => (
                <option key={modelObj.model} value={modelObj.model}>
                  {modelObj.name}
                </option>
              ))
            ) : (
              <option value="">{t("errorLoadingModels")}</option>
            )}
          </select>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <label className="mr-2 text-sm font-medium" htmlFor="debug-mode">
            {t("debugMode")}
          </label>
          <input
            id="debug-mode"
            type="checkbox"
            checked={debugMode}
            onChange={(e) => setDebugMode(e.target.checked)}
            className="w-5 h-5"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Section */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center">
            <Globe className="mr-2" size={20} />
            <label className="block text-sm font-medium mr-2" htmlFor="source-lang">
              {t("sourceLanguage")}
            </label>
            <select
              id="source-lang"
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="p-2 border rounded"
            >
              {languageList.length > 0
                ? languageList.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <textarea
            placeholder={t("inputPlaceholder")}
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            className="h-64 p-2 border rounded resize-none"
          ></textarea>
        </div>
        {/* Output Section */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center">
            <Globe className="mr-2" size={20} />
            <label className="block text-sm font-medium mr-2" htmlFor="target-lang">
              {t("targetLanguage")}
            </label>
            <select
              id="target-lang"
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="p-2 border rounded"
            >
              {languageList.length > 0
                ? languageList.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <textarea
            placeholder={t("outputPlaceholder")}
            value={mainTranslation}
            readOnly
            className="h-64 p-2 border rounded resize-none bg-gray-100"
          ></textarea>
          {aiThought && (
            <div className="mt-4">
              <button
                onClick={() => setShowThought(!showThought)}
                className="flex items-center justify-between w-full p-2 bg-slate-100 rounded border border-slate-300"
              >
                <span className="text-sm text-slate-600 font-medium">
                  {t("aiThought")}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    showThought ? "rotate-180" : ""
                  } text-slate-600`}
                  size={20}
                />
              </button>
              {showThought && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded mt-2 text-xs text-slate-500">
                  {aiThought}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleTranslate}
          disabled={loading || !sourceText.trim()}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} /> {t("translating")}
            </>
          ) : (
            <>
              {t("buttonTranslate")}
              <ArrowRight className="ml-2" size={20} />
            </>
          )}
        </button>
      </div>
      {error && <p className="mt-2 text-red-600 text-center">{error}</p>}
      {debugMode && debugResponse && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Debug Response</h3>
          <pre className="p-4 bg-gray-100 rounded overflow-auto text-sm">
            {JSON.stringify(debugResponse, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
