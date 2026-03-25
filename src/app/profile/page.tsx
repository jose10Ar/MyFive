import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { currentUser, mis4, userCurations } from "@/lib/data";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-32 max-w-7xl mx-auto px-6">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
            <div className="relative group">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden cinematic-shadow">
                <img
                  alt={currentUser.name}
                  className="w-full h-full object-cover"
                  src={currentUser.avatar}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-secondary-container text-on-secondary-container p-2 rounded-lg shadow-lg">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-primary mb-2 tracking-tight">
                {currentUser.name}
              </h1>
              <p className="text-on-surface-variant max-w-xl text-lg mb-6 italic">
                "{currentUser.bio}"
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center gap-1 px-4 py-2 bg-surface-container-low rounded-full">
                  <span className="font-label font-bold text-xs uppercase tracking-widest text-primary">
                    {(currentUser.followers / 1000).toFixed(1)}k
                  </span>
                  <span className="text-xs text-on-surface-variant">Followers</span>
                </div>
                <div className="flex items-center gap-1 px-4 py-2 bg-surface-container-low rounded-full">
                  <span className="font-label font-bold text-xs uppercase tracking-widest text-primary">
                    {currentUser.following}
                  </span>
                  <span className="text-xs text-on-surface-variant">Following</span>
                </div>
                <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-all active:scale-95">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-end mb-8 pl-8">
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] block mb-2">
                The Essentials
              </span>
              <h2 className="font-headline font-bold text-3xl text-primary">Mis 4</h2>
            </div>
            <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
              Update Favorites <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mis4.map((item, index) => (
              <Link
                key={item.id}
                href="/recommendation"
                className={`group relative spotlight-clip overflow-hidden ${item.style} aspect-[3/4] cinematic-shadow transition-transform hover:scale-[1.02] ${
                  index % 2 !== 0 ? "md:mt-8" : ""
                }`}
              >
                <img
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  src={item.poster}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-black px-2 py-0.5 rounded-sm uppercase mb-2 inline-block">
                    {item.type}
                  </span>
                  <h3 className="text-white font-headline font-bold text-xl leading-tight">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-headline font-bold text-2xl text-primary">
              Recent Curations
            </h2>
            <div className="h-[1px] flex-1 bg-outline-variant opacity-15"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userCurations.map((curation) => (
              <div
                key={curation.id}
                className="group bg-surface-container-lowest rounded-lg overflow-hidden cinematic-shadow border border-outline-variant/10"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={curation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={curation.poster}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {curation.type === "Movie" ? "star" : "audio_file"}
                    </span>{" "}
                    {curation.ratingGlobal && curation.ratingGlobal}
                    {curation.type !== "Movie" && " Album"}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {curation.genres.map((genre) => (
                      <span
                        key={genre}
                        className="px-2 py-0.5 bg-surface-container-high rounded text-[10px] font-bold text-on-surface-variant uppercase tracking-wider"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-headline font-bold text-xl mb-2 text-primary">
                    {curation.title}
                  </h3>
                  {curation.subtitle && (
                    <h4 className="text-secondary font-bold text-xs uppercase mb-3">
                      {curation.subtitle}
                    </h4>
                  )}
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">
                    {curation.review}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                    <span className="text-xs text-slate-400">
                      Recommended {curation.timeAgo}
                    </span>
                    <button className="text-primary hover:text-primary-container active:scale-90 transition-transform">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="text-on-surface-variant font-bold text-sm bg-surface-container-high px-10 py-3 rounded-full hover:bg-surface-container-highest transition-colors uppercase tracking-widest">
              Load More Curations
            </button>
          </div>
        </section>
      </main>
      <Navbar />
    </>
  );
}
