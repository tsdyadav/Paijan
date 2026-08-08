import { useState } from 'react';

export default function ContactForm({ contactEmail }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      _subject: 'New inquiry from Paijan India website',
      _captcha: 'false',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to send inquiry right now.');
      }

      form.reset();
      setStatus('Thanks! Your inquiry has been sent successfully.');
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-[0_8px_24px_rgba(7,26,47,0.08)]">
      <form aria-label="Contact form" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-brand-text">
          <span className="mb-2 block">Name</span>
          <input
            className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-text outline-none transition placeholder:text-brand-text-muted focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            placeholder="Your name"
            required
            name="name"
          />
        </label>
        <label className="block text-sm text-brand-text">
          <span className="mb-2 block">Email</span>
          <input
            className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-text outline-none transition placeholder:text-brand-text-muted focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
            placeholder="your@email.com"
            type="email"
            required
            name="email"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm text-brand-text">
        <span className="mb-2 block">Phone number</span>
        <input
          className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-text outline-none transition placeholder:text-brand-text-muted focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          placeholder=" Phone number"
          type="tel"
          required
          name="phone"
        />
      </label>
      <label className="mt-5 block text-sm text-brand-text">
        <span className="mb-2 block">Message</span>
        <textarea
          className="min-h-32 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-brand-text outline-none transition placeholder:text-brand-text-muted focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
          placeholder="Tell us about your machine requirements"
          required
          name="message"
        />
      </label>
      <button
        className="mt-6 rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
      </button>
        {status ? <p className="mt-4 text-sm text-brand-text">{status}</p> : null}
        <p className="mt-4 text-sm text-brand-text-muted">We typically respond within one business day.</p>
      </form>
    </div>
  );
}
