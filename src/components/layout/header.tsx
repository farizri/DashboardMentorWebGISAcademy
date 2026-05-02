"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/": "List Peserta WebGIS",
  "/list-peserta": "List Peserta WebGIS",
  "/monitoring": "Monitoring & Grading",
  "/portfolio": "Progress Portofolio WebGIS",
  "/admin": "Platform Administration",
  "/peserta": "My Progress Dashboard",
  "/register": "Create Account",
};

export function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "MAPID Academy";

  return (
    <header className="h-20 flex items-center justify-between px-8 bg-[#F3F4F6] flex-shrink-0">
      <h1 className="text-xl font-bold text-slate-900">{title}</h1>
      <div className="flex items-center gap-4">
        <div className="bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm flex items-center gap-3">
          <span className="text-sm font-medium text-slate-700">Mentor Raden</span>
          <div className="w-8 h-8 rounded-full bg-mapid-blue flex items-center justify-center text-white text-xs font-bold">
            R
          </div>
        </div>
      </div>
    </header>
  );
}
