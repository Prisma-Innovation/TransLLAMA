// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import ClientHeader from "../components/ClientHeader";

export const metadata = {
  title: "Ollama Translator",
  description: "Multi-language translator using local LLMs via Ollama",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-gray-50 text-gray-900">
        <LanguageProvider>
          <ClientHeader />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <footer className="text-center py-4 text-sm text-gray-600">
            Progetto open source – Licenza MIT
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
