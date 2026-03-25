"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: "movie_filter", label: "Feed" },
    { href: "#", icon: "search", label: "Search" },
    { href: "/new-post", icon: "add_circle", label: "Post" },
    { href: "/profile", icon: "person_2", label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-white/70 backdrop-blur-xl shadow-[0_-4px_20px_0_rgba(74,29,150,0.06)] z-50 rounded-t-[2rem]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center px-5 py-1 transition-all duration-300 active:scale-90 ${
              isActive
                ? "bg-yellow-400 text-purple-950 rounded-full"
                : "text-slate-400 hover:text-purple-600"
            }`}
          >
            <span
              className={`material-symbols-outlined ${
                item.icon === "add_circle" ? "text-3xl" : ""
              }`}
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : undefined }}
            >
              {item.icon}
            </span>
            <span className="font-headline text-[10px] font-bold uppercase tracking-widest mt-1">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
