export interface ContactCardProps {
  name: string;
  title: string;
  phone: string;
  serviceLabel: string;
  serviceArea: string;
}

export default function ContactCard({ name, title, phone, serviceLabel, serviceArea }: ContactCardProps) {
  return (
    <div className="rounded-xl bg-white shadow-lg p-4 md:p-5 flex items-stretch gap-3 md:gap-4 w-[320px] max-w-[85vw] h-auto">
      <div className="flex-1 min-w-0 flex items-start gap-2">
        <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full bg-primary/10 text-primary">
          <svg aria-hidden="true" className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </span>
        <div className="min-w-0 space-y-1 leading-snug">
          <p className="text-xs font-bold text-secondary leading-snug">{name}</p>
          <p className="text-[9px] font-semibold tracking-wide text-gray-500 uppercase leading-snug">{title}</p>
          <p className="text-[10px] flex items-center gap-1 text-primary font-medium leading-snug whitespace-nowrap">
            <svg aria-hidden="true" className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
          </p>
        </div>
      </div>

      <div className="w-px bg-gray-200 shrink-0 self-stretch" aria-hidden="true" />

      <div className="flex-1 min-w-0 flex items-start gap-2">
        <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full bg-primary/10 text-primary">
          <svg aria-hidden="true" className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
        <div className="min-w-0 space-y-1 leading-snug">
          <p className="text-xs font-bold text-secondary leading-snug">{serviceLabel}</p>
          <p className="text-[9px] text-gray-500 leading-snug">{serviceArea}</p>
        </div>
      </div>
    </div>
  );
}
