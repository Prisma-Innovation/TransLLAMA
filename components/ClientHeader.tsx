// components/ClientHeader.tsx
"use client";

import { useLanguage } from "../contexts/LanguageContext";
import Logo from "./Logo";
import { Globe } from "lucide-react";

export default function ClientHeader() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="mr-2" />
          <h1 className="text-2xl font-bold">{t("appTitle")}</h1>
        </div>
        <div className="flex items-center">
          <Globe className="mr-2" size={20} />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "it")}
            className="p-2 border rounded"
          >
            <option value="it">Italiano</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
}
