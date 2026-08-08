export default function FooterColumn({ heading, children, className = '' }) {
  return (
    <section className={className} aria-labelledby={`footer-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
      <h2
        id={`footer-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
        className="text-xs font-bold uppercase tracking-[0.08em] text-white"
      >
        {heading}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
