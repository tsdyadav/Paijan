export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full border border-brand-red/25 bg-brand-red-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-red ${className}`.trim()}>
      {children}
    </span>
  );
}
