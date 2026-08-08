import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container/Container';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import ContactForm from '../components/contact/ContactForm/ContactForm';
import contactData from '../data/contact.json';

export default function Contact() {
  return (
    <Container className="space-y-12 py-16">
      <Helmet>
        <title>Contact | Paijan India</title>
        <meta name="description" content="Connect with Paijan India for machine inquiries, manufacturing support, or a tailored solution discussion." />
      </Helmet>

      <SectionHeader
        eyebrow="Contact"
        title="Let’s talk about your next project"
        description="Share your requirements and we will reach out with the right solution."
      />
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-brand-border bg-brand-surface-muted p-8 shadow-[0_8px_24px_rgba(7,26,47,0.08)]">
          <h2 className="text-2xl font-semibold text-brand-navy">Get in touch</h2>
          <p className="mt-4 text-brand-text-muted">{contactData.description}</p>
          <ul className="mt-6 space-y-3 text-brand-text">
            <li>Email: {contactData.email}</li>
            <li>Phone: {contactData.phone}</li>
            <li>Location: {contactData.location}</li>
          </ul>

          <div className="mt-8 rounded-xl border border-brand-border bg-brand-surface p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">What to expect</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-text">
              {contactData.highlights?.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactForm contactEmail={contactData.email} />
      </div>
    </Container>
  );
}
