// app/page.tsx
"use client";

import TranslationForm from "../components/TranslationForm";
import { useLanguage } from "../contexts/LanguageContext";
import { Download } from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Sezione Informativa Aziendale */}
      <section className="w-full max-w-4xl">
        <div className="p-6 bg-gray-100 border rounded">
          <h2 className="text-2xl font-semibold mb-2">
            {t("companyInfoTitle")}
          </h2>
          <p className="text-lg">{t("companyInfoBody")}</p>
        </div>
      </section>

      {/* Sezione Obiettivo del Progetto */}
      <section className="w-full max-w-4xl">
        <div className="p-6 bg-gray-100 border rounded">
          <h2 className="text-2xl font-semibold mb-2">
            {t("projectObjectiveTitle")}
          </h2>
          <p className="text-lg">{t("projectObjectiveBody")}</p>
        </div>
      </section>

      {/* Sezione per Scaricare il Paper */}
      <section className="w-full max-w-4xl">
        <div className="p-6 bg-blue-50 border rounded flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2">
            {t("downloadPaperTitle")}
          </h2>
          <p className="text-lg mb-4">{t("downloadPaperDescription")}</p>
          <a
            href="/pdfs/transllama_paper.pdf"
            download
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Download className="mr-2" size={20} />
            {t("downloadPaperButton")}
          </a>
        </div>
      </section>

      {/* Componente di Traduzione */}
      <TranslationForm />

      {/* Sezione aggiuntiva (facoltativa) */}
      <section className="w-full max-w-4xl">
        <div className="p-6 bg-gray-100 border rounded">
          <p className="text-lg">{t("appDescription")}</p>
        </div>
      </section>
    </div>
  );
}
