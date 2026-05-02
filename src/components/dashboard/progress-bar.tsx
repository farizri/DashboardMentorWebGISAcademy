"use client";

// Using custom progress bar div for better control as per mockup


interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-mapid-blue h-full transition-all duration-500" 
          style={{ width: `${value}%` }} 
        />
      </div>
      <span className="text-[11px] text-slate-500 font-bold min-w-[28px]">{value}%</span>
    </div>
  );
}
