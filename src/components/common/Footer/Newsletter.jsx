import { useState } from 'react';

export default function Newsletter({ data }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubscribed(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2" aria-label={data.heading}>
      <p className="text-xs leading-5 text-slate-300">{data.description}</p>
      <label className="sr-only" htmlFor="footer-newsletter-email">{data.placeholder}</label>
      <input
        id="footer-newsletter-email"
        name="email"
        type="email"
        required
        placeholder={data.placeholder}
        className="h-8 w-full rounded-md border border-white/20 bg-white px-3 text-xs text-brand-text outline-none transition placeholder:text-brand-text-muted focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
      />
      <button type="submit" className="h-8 w-full rounded-md bg-brand-red px-4 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-navy">
        {data.buttonLabel}
      </button>
      {isSubscribed && <p className="text-[10px] text-white" role="status">{data.successMessage}</p>}
    </form>
  );
}
