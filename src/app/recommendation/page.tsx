import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function RecommendationDetail() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm shadow-purple-900/5">
        <nav className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="active:scale-95 duration-200 text-purple-900 dark:text-purple-100">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <span className="font-headline font-bold text-xl tracking-tight text-purple-900 dark:text-purple-100 italic">
              MyFave
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="active:scale-95 duration-200 text-purple-900 dark:text-purple-100">
              <span className="material-symbols-outlined">search</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="User profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJaJtCAf0JxPZUsLBvfYqV_QAqYJ-BZpnMAdYfP21SzExxRLQUuVLQmNvU3G8YIt0e-5_lhTSu9G-9yYjA2koCe5YY1Y5U_w642MJ9eum24xpdL5XEX-8L9sRDhSZ-P7YxAnVJgWlpLbA7GGxwqFULuARKaqWzD2zaFF62CQyUDDwFh28h1GjlO0SDCPrU41ZrCSk9JOcNmoDeMRMBJzfEGgbePmX_UWyvSfdYJXUlKqfvqTbW6HT7D6WVmG8cSn-xV5dMTAnow"
              />
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16 pb-32 max-w-7xl mx-auto">
        <section className="relative w-full h-[618px] md:h-[751px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              alt="Interstellar header"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWrUv2SiF9iMggWlVEGRQY8rPAK6edg35gvWPKfyQZKeOMOHCUWx1mSR7ND_gvk3s4qjkLTsp6FEu01H_v1JM6OYtG6LTGMcw8nyRa1hpSxZ21fLWmv8_w4s6CznsBuj7EOOlCty1gzxYFbXvXPI4WRcJsjJP4MJ23BcxpX4leUnf8is7GA9oMyMEPpIW04jYj9TTBSyJubdMb1cF0Fsz07oXDX_rhfQiVlR77fQCxe2XAmBVtbaCkR8yZ6d2D35yGRGISV403-A"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col items-start gap-4">
            <div className="flex gap-2">
              <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest font-label">
                Sci-Fi
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest font-label">
                2h 49m
              </span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-8xl tracking-tighter text-primary leading-none">
              Interstellar
            </h1>
            <div className="flex items-center gap-6 mt-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
                Watch Trailer
              </button>
              <div className="flex flex-col">
                <span className="text-secondary font-bold text-2xl flex items-center gap-1">
                  8.7{" "}
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                </span>
                <span className="text-on-surface-variant text-xs font-medium uppercase tracking-tighter">
                  Global Rating
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-7 space-y-12">
            <article>
              <h2 className="font-headline font-bold text-2xl text-primary mb-4">
                The Odyssey
              </h2>
              <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                When Earth becomes uninhabitable in the future, a farmer and
                ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft,
                along with a team of researchers, to find a new planet for humans.
                A breathtaking journey across space and time that challenges the
                limits of human endurance and the power of love.
              </p>
            </article>

            <div className="relative bg-tertiary-container text-on-tertiary-container p-8 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">
                  format_quote
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-on-tertiary-container/30 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Reviewer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjsLXosmGQDM4W17fPyH33G8h6C5jpQwJpMTkVDa3taSEB7_1acusbvCSPieLSXcpbWKC6w0-zdST3CufRndT4QYWbWo1Rg-Thr1Vc35_ZFchh7TZvO3eJZoCYam3HTLxEUh5iPcKy_em961V7Fx9KPTDU9xeVD2yrxiZvArxf-yDir64AByec1bPr1ZIGH8M6lNO-BMI2jYNKgJMcXfJClX6oG3GQ5lkRF_GqWh85Lwvg3X4xxX_PyXRgkYYchM3aODoMI_hSkw"
                  />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg leading-tight">
                    Sarah Jenkins
                  </h4>
                  <p className="text-sm opacity-80">Close Friend • 2 days ago</p>
                </div>
              </div>
              <blockquote className="font-headline text-2xl font-semibold italic leading-snug mb-6">
                "The most visceral cinematic experience of the decade. The docking
                scene still gives me chills every time Zimmer's score swells. It's
                not just a movie; it's a feeling."
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <span
                    className="material-symbols-outlined text-secondary-fixed"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    movie_filter
                  </span>
                  <span className="font-bold text-on-tertiary-fixed">
                    95 Pochoclos
                  </span>
                </div>
                <button className="font-label font-bold text-sm underline decoration-2 underline-offset-4">
                  Read full review
                </button>
              </div>
            </div>

            <section>
              <h3 className="font-headline font-bold text-xl text-primary mb-6">
                Director & Lead Cast
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center text-center gap-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img
                      className="w-full h-full object-cover"
                      alt="Nolan"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5InpSIwGYjuGJ4Q3VZjnFfzLgOP7eDxp94CQkyfMmaYHPZ4w01BL92s2KSDJU0IqBoXIEyANqazHraNr6_kUtlDQPXJBUteDS5VmIgcfafhPcaxIb11PYTQNQHktcgnd5JYJCZZ9KQdagXm35MUHTu8LRJFj7fe9fDqGV24cUV8XYA97rohfg7Pc0UUCyEx5n1D_NNJW28p9zTnxlMNkAqw0_oWuwW3f3NPiSKH_TaqO-Bqcn5UYgrHmKIv53ZVF2V94kAWMEoA"
                    />
                  </div>
                  <span className="font-bold text-sm">C. Nolan</span>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                    Director
                  </span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center text-center gap-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img
                      className="w-full h-full object-cover"
                      alt="McConaughey"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8n3DOY50vULugV7g2vBr8xoCB9ttZCKw3IA_9xgLvEqQUBs1tz2SOc7mBAR09xE2U8kqNoTO8whlOg0Q9PNT-RIyiRmIdk8F9iyw_yY-LWjkLpTzf84YiWSCIauwt93gqX5_Ofh8etno1iBWYjdXkFUb029EQ26mWNO-MfeEIrktUcgYOxw2WNIc5vzZfLH9eSlPJ1FKKv2AH09tqyOpZfUF4NrexUPnCGcLQAZPJaphpzfLPCYfp8LACuESQiydBkzOlLHi9Q"
                    />
                  </div>
                  <span className="font-bold text-sm">M. McConaughey</span>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                    Cooper
                  </span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center text-center gap-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img
                      className="w-full h-full object-cover"
                      alt="Chastain"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyTxkC3Hf2Gk6mMrvQeQeqEYtBTrbCQUwtM-ZYcDBAwcp7_YwAkaSrlDfjxtGTWe0o3NXp1_48sSy8UHZkECvWk_VNzUgCtiWenT2MQYH_4nvExVCTj0EcWY3J5INTRSVv_nrlUfvkeAW2D2leqeOXC3OTX_V7vibSOb3tK05b0lsSHQFqb2yjv9p6RkKjU2ddN6J5brJIOO2BeH3f8xH4EyLvpAUx7FxIEBXxURQ7VGw-DU9pPteGDO2Fnjj2eDKsK9yGZAT3eA"
                    />
                  </div>
                  <span className="font-bold text-sm">J. Chastain</span>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                    Murph
                  </span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center text-center gap-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img
                      className="w-full h-full object-cover"
                      alt="Hathaway"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEOzMoHXabRJtLX6sMh1NIRQY3hE5c77_zJnmrxGyWaJ_rEXPNzc9QG_2WFj9E1Byk_aSl7hMt2S2mGqWzKYreH8Ya0qFrqK4kPDzwVYXzzGQNulYMxrSutGVUrNp93aHIgl8nSzP-4IX0fL0D3U6vzgkEMnqRZFlpD49QQYdslrAZ9auOZ1u5-U1mElRoxvd5rPLfAT7IgRshu-GW3TQa7lA8rHbJbV_dGjqth_ApPhlqPxbeWXKNnT9ivwQQ7UIcoR0im8pF1g"
                    />
                  </div>
                  <span className="font-bold text-sm">A. Hathaway</span>
                  <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
                    Brand
                  </span>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline font-bold text-xl text-primary italic">
                  Pochoclo Count
                </h3>
                <span className="bg-secondary-container text-on-secondary-container font-black px-3 py-1 rounded-full text-lg">
                  1,248
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button className="flex-1 flex items-center justify-center gap-2 bg-secondary-fixed text-on-secondary-fixed font-bold py-4 rounded-full active:scale-95 transition-transform">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    movie_filter
                  </span>
                  Toss Pochoclo
                </button>
              </div>
              <p className="text-xs text-on-surface-variant text-center mt-4 font-medium uppercase tracking-widest italic">
                Join the crowd
              </p>
            </div>

            <section className="space-y-6">
              <h3 className="font-headline font-bold text-xl text-primary px-2">
                Friends' Thoughts
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-surface-container-low/50">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    alt="Commenter"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT2Q0pAIhj7VsOSMcjYoikP9Cx3Qw5fCLFkahjom07ddj9E8hwGBifWrQoCvdKGH_6_xvWLdL-a4Dicn7JbpISrWuRlMNlfp4rACvFFY6qb4jc8OickpEjb-W9sYC8y-rIkMLKO3OR_8YCsk9Mqi4mxkDjORS_njdYdtxZH91pD90syHqdS1Z9Fuhtw0p-hX6_Z95M0FHfgwc5g4tsWM89bFB-MRA0rnQ3wnMjBv-ZqPPk6w0VPM2Mal_XIsOU3hnmqajiuGiIfg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm">David Chen</span>
                      <span className="text-[10px] text-on-surface-variant">
                        4h ago
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Hans Zimmer went absolutely crazy on this one. The church
                      organ sends me to another dimension.
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="text-xs font-bold text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          thumb_up
                        </span>{" "}
                        12
                      </button>
                      <button className="text-xs font-bold text-on-surface-variant">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-surface-container-low/50">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    alt="Commenter 2"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0hU_xMb_nR_Rs4ohmIpZjzCp9bAkzfhFnq9DeyikzNpzouEdQ4kuAV3gMYLUd331pD-5G8iasMbSK7EZslm6bvlyFbNR-T6CxvvbE-6CbEJmCNJp9YXS-evpSZ8zxQaK9QDaaRqvKSb6ZMP4QXCt4rF33dwzrmlM72X8SE4lmC-RcT72nRwxmI-PHZ2oHwz7C5WPxS3R838v4HzmGCWOZUPlrHb9zIjUEBrC2c5ouCiKHzd2qdi-k_xx7hebxmd5EzlNqENiHPg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm">Elena Rodriguez</span>
                      <span className="text-[10px] text-on-surface-variant">
                        1d ago
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      The science is so accurate (mostly) and yet the emotional
                      core is what actually anchors the story.
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="text-xs font-bold text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          thumb_up
                        </span>{" "}
                        8
                      </button>
                      <button className="text-xs font-bold text-on-surface-variant">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-surface-tint/40 transition-all placeholder:text-on-surface-variant/50"
                    placeholder="Add your thought..."
                    type="text"
                  />
                  <button className="absolute right-2 top-2 p-2 bg-primary text-on-primary rounded-full">
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
      <Navbar />
    </>
  );
}
