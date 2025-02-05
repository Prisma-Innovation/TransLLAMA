// app/api/languages/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const languages = [
    { code: "en", name: "English" },
    { code: "it", name: "Italiano" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "es", name: "Español" }
  ];
  return NextResponse.json({ languages });
}
