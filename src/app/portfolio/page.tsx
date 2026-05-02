"use client";

import { Briefcase } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center pt-20 text-center p-8">
      <Briefcase className="w-16 h-16 text-slate-200 mb-4" />
      <h2 className="text-2xl font-bold text-slate-400">Project Definition & Portfolio</h2>
      <p className="text-slate-400 max-w-md mt-2">
        Halaman ini akan berisi daftar project peserta, pengumpulan link storymap, dan verifikasi deployment.
      </p>
    </div>
  );
}
