export default function MachineSpecs({ machine }) {
  return (
    <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-[0_8px_24px_rgba(7,26,47,0.08)]">
      <div className="inline-flex rounded-full border border-brand-red/25 bg-brand-red-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
        Technical overview
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-brand-navy">Specifications</h2>
      <p className="mt-4 text-brand-text-muted">{machine.longDescription}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {machine.features?.map((feature) => (
          <span key={feature} className="rounded-full border border-brand-border bg-brand-surface-muted px-3 py-1 text-sm text-brand-text">
            {feature}
          </span>
        ))}
      </div>

      <ul className="mt-8 space-y-3 text-brand-text">
        {machine.specs?.map((spec) => (
          <li key={spec.label} className="flex items-center justify-between border-b border-brand-border pb-2">
            <span>{spec.label}</span>
            <span className="font-semibold text-brand-navy">{spec.value}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-xl border border-brand-border bg-brand-surface-muted p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Applications</p>
        <p className="mt-3 text-sm leading-7 text-brand-text">{machine.applications?.join(' • ')}</p>
      </div>
    </div>
  );
}
