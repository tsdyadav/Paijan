import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import Card from '../../common/Card/Card';

export default function CTA({ data, company }) {
  return (
    <section className="py-16">
      <Container>
        <Card className="border-brand-red-dark bg-gradient-to-r from-brand-red-dark to-brand-red p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{company.name}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{data.title}</h2>
          <p className="mt-4 max-w-2xl text-white/85">{data.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact" className="bg-white text-brand-red hover:bg-brand-surface-muted">Get in Touch</Button>
            <Button to="/machines" variant="secondary" className="border-white text-white hover:border-white hover:bg-white hover:text-brand-red">View Machines</Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
