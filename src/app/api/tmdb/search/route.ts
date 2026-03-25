import { NextResponse } from "next/server";

const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  if (!TMDB_ACCESS_TOKEN) {
    // Si no hay token configurado todavía, devolvemos un error amigable o datos de prueba para que la UI no se rompa (Mock Data)
    return NextResponse.json(
      {
        error: "Missing TMDB API Token",
        results: [
          {
            id: 1,
            title: `[Sin Token TMDB] Simulación de: ${query}`,
            release_date: "2024-01-01",
            poster_path: null,
            media_type: "movie",
          },
        ],
      },
      { status: 200 } // Retornamos 200 para que la interfaz muestre el aviso visualmente
    );
  }

  try {
    const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=es-ES&page=1`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      },
      // Habilitar cache con NEXT.JS si no se requiere live-time total
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Error fetching from TMDB");
    }

    const data = await response.json();

    // Filtramos solo películas y series (quitamos personas)
    const filteredResults = data.results
      .filter((item: any) => item.media_type === "movie" || item.media_type === "tv")
      .slice(0, 5); // Tomamos solo los 5 mejores resultados con las portadas

    return NextResponse.json({ results: filteredResults });
  } catch (error) {
    console.error("TMDB API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error", results: [] }, { status: 500 });
  }
}
