import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

export default function WhyChooseUs({ data }) {
  return (
    <section className="py-16">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-brand-navy-secondary bg-brand-navy p-8 [&_h2]:text-white [&_p]:text-slate-200">
          <SectionHeader eyebrow="Why Choose Us" title="Built with experience and precision" description={data.description} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {['Engineering excellence', 'Reliable delivery', 'After-sales support', 'Custom manufacturing'].map((item, index) => (
            <div key={item} className="rounded-2xl border border-brand-border bg-brand-surface-muted p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">{index + 1}</p>
              <h3 className="mt-4 text-lg font-semibold text-brand-navy">{item}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
