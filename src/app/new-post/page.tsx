"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

const VIBES = ["Mind-Blowing", "Cozy", "Intense", "Classic"];

type TMDBResult = {
  id: number;
  title?: string;
  name?: string; // TV shows use "name"
  release_date?: string;
  first_air_date?: string; // TV shows use "first_air_date"
  poster_path: string | null;
  media_type: string;
};

export default function NewPost() {
  const [rating, setRating] = useState<number>(4);
  const [activeVibes, setActiveVibes] = useState<string[]>(["Mind-Blowing"]);
  const [review, setReview] = useState("");

  // Búsqueda en TMDB
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<TMDBResult[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<TMDBResult | null>(null);

  useEffect(() => {
    // Si la búsqueda está vacía o el usuario ya seleccionó una peli, no buscamos
    if (!searchQuery.trim() || selectedMovie?.title === searchQuery) {
      setSearchResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`/api/tmdb/search?q=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setSearchResults(data.results || []);
      } catch (error) {
        console.error("Failed to fetch movies", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 500); // Debounce de 500ms para no saturar la API

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, selectedMovie]);

  const toggleVibe = (vibe: string) => {
    setActiveVibes((prev) =>
      prev.includes(vibe) ? prev.filter((v) => v !== vibe) : [...prev, vibe]
    );
  };

  const handleSelectMovie = (movie: TMDBResult) => {
    setSelectedMovie(movie);
    setSearchQuery(movie.title || movie.name || "");
    setSearchResults([]); // Limpiamos dropdown
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm shadow-purple-900/5 h-16">
        <div className="flex justify-between items-center px-6 h-full w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="material-symbols-outlined text-purple-900 active:scale-95 duration-200"
            >
              arrow_back
            </Link>
            <span className="font-headline font-bold text-xl tracking-tight text-purple-900">
              New Recommendation
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-slate-500 hover:opacity-80 transition-opacity cursor-pointer">
              search
            </span>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/10">
              <img
                className="w-full h-full object-cover"
                alt="User portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFrb3KNtSAyqAP8WE6AJRBJ_V7YxRKIDD_C2CsGQjYIugElHmLIzTtCqMA0XSN-5YJ5VTecIICMQHSvW3TjfbHUong_l3QsAKcs9h5-jzCYy9a2_SF2-5paTD5JXTLFnuhTUJ5T9elnkDOWg4jdEl9-80QuUCL-FkQI9SMlRnhsmUvU33SCvi-M2OGoiKwsvqQb_BmpKJMocD1h80ntuCvKoh_flC2WwpgSQpzmUjF5XNRbWH70PGBaiIpK6LcGaNdCCqZOBqILw"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto pb-32">
        <section className="mb-10">
          <div className="bg-tertiary-container rounded-tr-xl rounded-bl-xl p-8 relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <span className="font-label text-xs font-bold text-on-tertiary-container uppercase tracking-[0.2em] mb-2 block">
                The Stage is Yours
              </span>
              <h1 className="font-headline text-3xl font-extrabold text-white leading-tight mb-4">
                What's the next <br />
                <span className="text-secondary-fixed">Masterpiece?</span>
              </h1>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute right-4 top-4 opacity-20">
              <span className="material-symbols-outlined text-7xl text-white">
                movie_filter
              </span>
            </div>
          </div>
        </section>

        <div className="space-y-8">
          {/* TMDB Search Component */}
          <div className="space-y-3 relative">
            <label className="font-headline font-bold text-primary px-1">
              Find Movie or Show
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-surface-container-highest rounded-lg border-none focus:ring-2 focus:ring-surface-tint/40 font-body text-on-surface placeholder:text-outline/60 transition-all"
                placeholder="Search for a title..."
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (selectedMovie) setSelectedMovie(null); // Borrar selección si edita el input
                }}
              />
              {isSearching && (
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline animate-spin">
                  sync
                </span>
              )}
            </div>

            {/* Dropdown de Resultados TMDB */}
            {searchResults.length > 0 && (
              <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-xl shadow-purple-900/10 border border-surface-container overflow-hidden">
                {searchResults.map((result) => {
                  const title = result.title || result.name || "Unknown Title";
                  const date = result.release_date || result.first_air_date || "";
                  const year = date ? date.split("-")[0] : "????";
                  const imageUrl = result.poster_path
                    ? `https://image.tmdb.org/t/p/w92${result.poster_path}`
                    : "https://via.placeholder.com/92x138.png?text=No+Poster";

                  return (
                    <button
                      key={result.id}
                      onClick={() => handleSelectMovie(result)}
                      className="w-full flex items-center gap-4 px-4 py-3 hover:bg-surface-container-low transition-colors border-b border-surface-container-high last:border-0 text-left"
                    >
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-10 h-14 object-cover rounded bg-surface-dim"
                      />
                      <div className="flex-1">
                        <p className="font-headline font-bold text-sm text-primary line-clamp-1">
                          {title}
                        </p>
                        <p className="font-body text-xs text-on-surface-variant flex gap-2">
                          <span className="uppercase text-[10px] font-bold tracking-widest text-secondary">
                            {result.media_type === "tv" ? "Series" : "Movie"}
                          </span>
                          • {year}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Estado seleccionado (Visual Feedback) */}
            {selectedMovie && (
              <div className="mt-4 p-4 bg-primary-container text-on-primary-container rounded-lg flex items-start gap-4 shadow-inner">
                {selectedMovie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w154${selectedMovie.poster_path}`}
                    alt="Selected Poster"
                    className="w-16 h-24 object-cover rounded shadow-md"
                  />
                )}
                <div>
                  <span className="font-label text-[10px] font-black uppercase tracking-widest text-primary-fixed opacity-80 mb-1 inline-block">
                    {selectedMovie.media_type === "tv" ? "Series" : "Movie"} Selected
                  </span>
                  <h3 className="font-headline font-bold text-lg leading-tight mb-1">
                    {selectedMovie.title || selectedMovie.name}
                  </h3>
                  <p className="text-xs opacity-70">
                    {(selectedMovie.release_date || selectedMovie.first_air_date)?.split("-")[0]}
                  </p>
                </div>
              </div>
            )}

            {!selectedMovie && searchResults.length === 0 && !searchQuery && (
              <div className="flex flex-wrap gap-2 mt-2">
                {["Dune: Part Two", "Poor Things", "The Bear"].map((suggestion) => (
                  <span
                    key={suggestion}
                    onClick={() => setSearchQuery(suggestion)}
                    className="px-3 py-1 bg-surface-container-high rounded-sm text-xs font-medium text-on-surface-variant cursor-pointer hover:bg-surface-container-highest"
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="bg-surface-container-low rounded-lg p-8 text-center space-y-6">
            <h3 className="font-headline font-bold text-primary">
              Your Pochoclos Rating
            </h3>
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4, 5].map((num) => {
                const isActive = num <= rating;
                return (
                  <button
                    key={num}
                    onClick={() => setRating(num)}
                    className="group flex flex-col items-center gap-2 transition-transform active:scale-90"
                  >
                    <span
                      className={`material-symbols-outlined text-4xl transition-colors ${
                        isActive
                          ? "text-secondary-container popcorn-glow"
                          : "text-outline-variant hover:text-secondary-container"
                      }`}
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      theater_comedy
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest transition-opacity ${
                        num === rating
                          ? "text-secondary opacity-100"
                          : "text-secondary opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {num}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-sm text-on-surface-variant font-medium italic">
              {rating === 1 && "Not my cup of tea..."}
              {rating === 2 && "It was okay."}
              {rating === 3 && "Pretty good, enjoyable."}
              {rating === 4 && "A solid four-popcorn experience!"}
              {rating === 5 && "Absolute Masterpiece!"}
            </p>
          </div>

          <div className="space-y-3">
            <label className="font-headline font-bold text-primary px-1">
              Why do you fave it?
            </label>
            <textarea
              className="w-full p-6 bg-surface-container-highest rounded-lg border-none focus:ring-2 focus:ring-surface-tint/40 font-body text-on-surface placeholder:text-outline/60 resize-none transition-all leading-relaxed"
              placeholder="Write your cinematic review... Focus on the direction, the script, or just how much it made you cry."
              rows={6}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>

          <div className="space-y-3">
            <label className="font-headline font-bold text-primary px-1">
              Vibe Check
            </label>
            <div className="flex flex-wrap gap-2">
              {VIBES.map((vibe) => {
                const isActive = activeVibes.includes(vibe);
                return (
                  <button
                    key={vibe}
                    onClick={() => toggleVibe(vibe)}
                    className={`px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wider transition-all active:scale-95 ${
                      isActive
                        ? "bg-secondary-fixed text-on-secondary-fixed shadow-sm"
                        : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                    }`}
                  >
                    {vibe}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6">
            <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-headline font-extrabold text-lg tracking-wide shadow-xl shadow-primary/20 active:scale-[0.98] transition-all hover:opacity-90">
              Post My Recommendation ({rating} Pochoclos)
            </button>
          </div>
        </div>
      </main>
      <Navbar />
    </>
  );
}
