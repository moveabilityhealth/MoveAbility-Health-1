import type { ReactNode } from "react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function ServiceCard({ icon, title, subtitle }: ServiceCardProps) {
  return (
    <div className="h-full min-h-[152px] md:min-h-[168px] flex flex-col justify-start rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white p-4 md:p-5 lg:p-3 space-y-2 md:space-y-3 lg:space-y-2 text-center">
      <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-9 lg:h-9 mx-auto rounded-full bg-primary/10 text-primary">
        <svg aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          {icon}
        </svg>
      </span>
      <div className="space-y-1">
        <h3 className="font-semibold text-secondary text-xs sm:text-sm lg:text-[11px] leading-snug">{title}</h3>
        <p className="text-[11px] sm:text-xs lg:text-[10px] text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
