const iconPaths = {
  facebook: <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
  youtube: <><path d="M21 12s0-4-1-5-3.3-1-8-1-7 0-8 1-1 5-1 5 0 4 1 5 3.3 1 8 1 7 0 8-1 1-5 1-5Z" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></>,
  linkedin: <><rect x="4" y="9" width="4" height="11" /><circle cx="6" cy="5" r="2" fill="currentColor" stroke="none" /><path d="M11 20v-6c0-2.5 1.5-4 3.7-4 2.1 0 3.3 1.4 3.3 4v6M11 14v-4" /></>
};

export default function SocialLinks({ links }) {
  return (
    <ul className="flex items-center gap-2" aria-label="Social media links">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.label} className="flex size-7 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:border-brand-red hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {iconPaths[link.icon]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
