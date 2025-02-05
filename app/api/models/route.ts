// app/api/models/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("http://localhost:11434/api/tags", {
      method: "GET"
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Errore nel recupero dei modelli" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ models: data.models });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Errore interno" },
      { status: 500 }
    );
  }
}
