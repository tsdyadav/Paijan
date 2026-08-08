export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-brand-border bg-brand-surface shadow-[0_8px_24px_rgba(7,26,47,0.08)] ${className}`.trim()}>
      {children}
    </div>
  );
}
