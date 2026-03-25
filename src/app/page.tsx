import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { feedRecommendations } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-32 px-4 max-w-7xl mx-auto">
        <section className="mb-12">
          <h1 className="font-headline font-extrabold text-4xl text-primary tracking-tight mb-2 ml-4">
            El Feed
          </h1>
          <p className="font-body text-on-surface-variant ml-4 opacity-70">
            Recomendaciones curadas por tu círculo.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta 1 y 2 mapeada dinamicamente */}
          {feedRecommendations.slice(0, 1).map((rec) => (
            <article
              key={rec.id}
              className="bg-surface-container-lowest rounded-lg overflow-hidden editorial-shadow transition-transform duration-300 hover:scale-[1.01]"
            >
              <Link href="/recommendation" className="relative aspect-[2/3] group block">
                <img
                  className="w-full h-full object-cover"
                  alt={rec.title}
                  src={rec.poster}
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <span
                    className="material-symbols-outlined text-secondary-container text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    movie_filter
                  </span>
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase font-label">
                    {rec.genres[0]}
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover border-2 border-secondary-container"
                    alt={rec.user.name}
                    src={rec.user.avatar}
                  />
                  <div>
                    <p className="font-headline font-bold text-sm text-primary">
                      {rec.user.name}
                    </p>
                    <p className="font-label text-[10px] text-secondary font-bold uppercase tracking-wider">
                      Le dio {rec.ratingPochoclos} Pochoclos
                    </p>
                  </div>
                </div>
                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">
                  {rec.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6 italic">
                  "{rec.review}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1.5 text-primary group transition-all">
                      <span className="material-symbols-outlined group-active:scale-125 duration-200">
                        favorite
                      </span>
                      <span className="text-xs font-bold">
                        {rec.likes > 1000 ? (rec.likes / 1000).toFixed(1) + "k" : rec.likes}
                      </span>
                    </button>
                    <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">chat_bubble</span>
                      <span className="text-xs font-bold">{rec.comments}</span>
                    </button>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}

          {/* Sección Destacada */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-tertiary-container rounded-xl p-8 text-on-tertiary-container relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <span className="material-symbols-outlined text-[12rem]">
                  movie_filter
                </span>
              </div>
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">
                Edición del Director
              </span>
              <h2 className="font-headline font-extrabold text-3xl mb-4 leading-tight">
                Imperdible: The Golden Hour
              </h2>
              <p className="font-body text-sm mb-6 opacity-90 leading-relaxed">
                Unite a la "watch party" exclusiva de la comunidad para ver el drama indie del año.
              </p>
              <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
                Reservar Asiento
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Micro Feed Card */}
            {feedRecommendations.length > 1 && (
              <article className="bg-surface-container-low rounded-lg p-6 editorial-shadow cursor-pointer hover:bg-surface-container-high transition-colors">
                <Link href="/recommendation" className="block">
                  <div className="flex gap-4 mb-4">
                    <div className="w-24 h-32 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        alt={feedRecommendations[1].title}
                        src={feedRecommendations[1].poster}
                      />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-primary leading-snug">
                        {feedRecommendations[1].title}
                      </h4>
                      <p className="font-label text-[10px] text-secondary font-bold uppercase tracking-wider mb-2">
                        {feedRecommendations[1].ratingPochoclos} Pochoclos
                      </p>
                      <p className="font-body text-xs text-on-surface-variant line-clamp-3">
                        {feedRecommendations[1].user.name.split(" ")[0]} dijo: "
                        {feedRecommendations[1].review}"
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300"></div>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-400"></div>
                    </div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                      +{feedRecommendations[1].likes} Amigos flashearon con esto
                    </span>
                  </div>
                </Link>
              </article>
            )}
          </div>

          {/* Tarjeta 3 */}
          {feedRecommendations.length > 2 && (
            <article className="bg-surface-container-lowest rounded-lg overflow-hidden editorial-shadow md:col-span-2 lg:col-span-1">
              <Link href="/recommendation" className="relative aspect-video block">
                <img
                  className="w-full h-full object-cover"
                  alt={feedRecommendations[2].title}
                  src={feedRecommendations[2].poster}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                  <p className="font-label text-secondary-fixed text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                    {feedRecommendations[2].genres[0]}
                  </p>
                  <h3 className="text-white font-headline font-bold text-2xl">
                    {feedRecommendations[2].title}
                  </h3>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt={feedRecommendations[2].user.name}
                    src={feedRecommendations[2].user.avatar}
                  />
                  <div>
                    <p className="font-headline font-bold text-sm text-primary">
                      {feedRecommendations[2].user.name}
                    </p>
                    <p className="font-label text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      Le dio {feedRecommendations[2].ratingPochoclos} Pochoclos
                    </p>
                  </div>
                </div>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                  "{feedRecommendations[2].review}"
                </p>
                <div className="flex gap-4">
                  <button className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined text-sm">
                      thumb_up
                    </span>
                    ¡Joya! ({feedRecommendations[2].likes})
                  </button>
                  <button className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Para Ver
                  </button>
                </div>
              </div>
            </article>
          )}
        </div>
      </main>
      <Navbar />
    </>
  );
}
