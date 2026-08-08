import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Card from '../../common/Card/Card';

export default function Testimonials({ data }) {
  return (
    <section className="bg-brand-surface-muted py-16">
      <Container className="space-y-8">
        <SectionHeader eyebrow="Testimonials" title="Trusted by clients across industries" description="Our production partners value reliability, speed, and performance." align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {data.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-red/35 hover:shadow-[0_14px_30px_rgba(7,26,47,0.12)]">
              <p className="text-lg leading-8 text-brand-text">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-brand-navy">{testimonial.name}</p>
                <p className="text-sm text-brand-text-muted">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
