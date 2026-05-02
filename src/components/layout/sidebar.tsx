"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, BarChart2, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "List Peserta (Lark)", href: "/list-peserta", icon: Users },
  { name: "Grading & Monitoring", href: "/monitoring", icon: BarChart2 },
  { name: "Progress Portofolio", href: "/portfolio", icon: Briefcase },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full z-20">
      <div className="h-20 flex items-center px-6 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-mapid-blue flex items-center justify-center text-white font-bold text-xs">
            MA
          </div>
          <div className="font-bold text-xl leading-tight text-mapid-dark uppercase tracking-tighter">
            MAPID<br />
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-400">ACADEMY</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-8 px-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (pathname === "/" && item.href === "/list-peserta");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
                isActive
                  ? "bg-blue-50 text-mapid-blue font-semibold"
                  : "text-slate-500 hover:bg-slate-50"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-mapid-blue" : "text-slate-400")} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Internal Tool</p>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Authorized access only for MAPID Mentors.
          </p>
        </div>
      </div>
    </aside>
  );
}
