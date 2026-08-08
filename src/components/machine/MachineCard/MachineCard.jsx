import { Link } from 'react-router-dom';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function MachineCard({ machine }) {
  const accentClasses = 'from-brand-navy to-brand-navy-secondary';

  return (
    <Link
      to={`/machines/${machine.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-[0_8px_24px_rgba(7,26,47,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-[0_16px_32px_rgba(7,26,47,0.14)]"
    >
      <div className={`aspect-[4/3] overflow-hidden rounded-xl border border-brand-border bg-gradient-to-br ${accentClasses}`}>
        <ResponsiveImage image={machine.galleryImages?.[0]} alt={machine.name} className="h-full w-full object-cover" />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">{machine.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-navy">{machine.name}</h3>
          </div>
          <span className="rounded-full border border-brand-red/25 bg-brand-red-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
            View
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-brand-text-muted">{machine.shortDescription}</p>

        <div className="mt-4 rounded-xl border border-brand-border bg-brand-surface-muted p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-text-muted">Key attributes</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-text">
            {machine.highlights?.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {machine.specs?.slice(0, 2).map((spec) => (
          <span key={spec.label} className="rounded-full border border-brand-border bg-brand-surface-muted px-3 py-1 text-xs text-brand-text">
              {spec.label}: {spec.value}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}
