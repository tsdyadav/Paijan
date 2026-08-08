import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function StrapCard({ item, contactLabel }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-[0_14px_30px_rgba(7,26,47,0.12)]">
      <ResponsiveImage image={item.image} alt={item.title} className="aspect-square w-full bg-brand-surface-muted object-cover transition duration-500 group-hover:scale-[1.03]" />
      <div className="p-3.5">
        <h3 className="min-h-12 text-base font-bold leading-5 text-brand-navy">{item.title}</h3>
        <Link to="/contact" className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">
          <Send className="size-4" aria-hidden="true" />
          {contactLabel}
        </Link>
      </div>
    </article>
  );
}
