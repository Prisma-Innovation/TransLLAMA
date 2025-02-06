// locales/translations.ts
const translations = {
  en: {
    appTitle: "TransLLAMA",
    appDescription: "Multi-language translator using local LLMs via Ollama",
    modelSelector: "Select model:",
    debugMode: "Debug Mode",
    sourceLanguage: "Source Language:",
    targetLanguage: "Target Language:",
    inputPlaceholder: "Enter the text to translate...",
    outputPlaceholder: "The translation will appear here...",
    buttonTranslate: "Translate",
    translating: "Translating...",
    errorLoadingModels: "Error loading models",
    translationError: "Error during translation",
    aiThought: "AI Thought",
    companyInfoTitle: "About PRISMA S.R.L.",
    companyInfoBody:
      "PRISMA S.R.L. is an Italian company that offers custom IT solutions and technology consulting. Our motto is 'Connecting Innovation and Talent'. We provide tailor-made IT solutions to meet your business needs, with an approach focused on excellence, tangible results, and close collaboration with our clients to deliver real value through digital solutions.",
    projectObjectiveTitle: "Project Objective",
    projectObjectiveBody:
      "TransLLAMA is a research project aimed at demonstrating that it is possible to develop a complete web application solely guided by a large language model, without any manual coding. By leveraging precise prompt engineering, our AI generated the entire codebase autonomously, showcasing the potential of AI-driven development for creating robust and user-friendly applications. For optimal performance, it is necessary to download Ollama and run a local LLM model (for our tests, we recommend using deepseek-r1:8b).",
    developmentNotesTitle: "Development Notes",
    developmentNotesBody:
      "The entire project has been developed using the ChatGPT o3-mini-high model. No human developer has manually modified the code; only the prompts have been defined by human experts.",
    downloadPaperTitle: "Download Research Paper",
    downloadPaperDescription:
      "Click the button below to download the research paper summarizing the development of TransLLAMA.",
    downloadPaperButton: "Download PDF",
  },
  it: {
    appTitle: "TransLLAMA",
    appDescription: "Traduttore multilingua basato su modelli locali via Ollama",
    modelSelector: "Seleziona il modello:",
    debugMode: "Modalità Debug",
    sourceLanguage: "Lingua di origine:",
    targetLanguage: "Lingua di destinazione:",
    inputPlaceholder: "Inserisci il testo da tradurre...",
    outputPlaceholder: "La traduzione apparirà qui...",
    buttonTranslate: "Traduci",
    translating: "Traducendo...",
    errorLoadingModels: "Errore nel caricamento dei modelli",
    translationError: "Errore durante la traduzione",
    aiThought: "Pensiero della AI",
    companyInfoTitle: "Chi Siamo - PRISMA S.R.L.",
    companyInfoBody:
      "PRISMA S.R.L. è un’azienda italiana che offre soluzioni IT personalizzate e consulenza tecnologica. Il nostro motto è 'Connettere Innovazione e Talento'. Proponiamo soluzioni IT su misura per soddisfare le esigenze aziendali, con un approccio orientato all’eccellenza, ai risultati concreti e alla collaborazione con i clienti, garantendo un reale valore aggiunto alle soluzioni digitali.",
    projectObjectiveTitle: "Obiettivo del Progetto",
    projectObjectiveBody:
      "TransLLAMA è un progetto di ricerca volto a dimostrare che è possibile sviluppare un'intera applicazione web utilizzando esclusivamente un large language model, senza interventi manuali sul codice. Grazie a prompt accurati, l'AI ha generato autonomamente l'intero codice, evidenziando il potenziale dello sviluppo basato sull'AI per creare applicazioni robuste e user-friendly. Per ottenere le migliori prestazioni, è necessario scaricare Ollama ed utilizzare un modello LLM in locale (per i nostri test suggeriamo deepseek-r1:8b).",
    developmentNotesTitle: "Note di Sviluppo",
    developmentNotesBody:
      "L'intero progetto è stato sviluppato utilizzando il modello ChatGPT o3-mini-high. Nessun codice è stato modificato manualmente da sviluppatori; solo i prompt sono stati definiti da esperti umani.",
    downloadPaperTitle: "Scarica il Paper di Ricerca",
    downloadPaperDescription:
      "Clicca sul pulsante qui sotto per scaricare il paper che riassume lo sviluppo di TransLLAMA.",
    downloadPaperButton: "Scarica PDF",
  },
};

export default translations;
