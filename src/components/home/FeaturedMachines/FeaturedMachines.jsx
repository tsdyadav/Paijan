import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import Card from '../../common/Card/Card';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function FeaturedMachines({ data }) {
  const featured = data.slice(0, 3);

  return (
    <section className="bg-brand-navy py-16">
      <Container className="space-y-8">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Featured Machines</p><h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Engineered for demanding production environments</h2><p className="mt-4 text-base leading-7 text-slate-200">A compact showcase of equipment built for scale, precision, and durability.</p></div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((machine) => (
            <Card key={machine.id} className="border-white/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-red hover:shadow-[0_16px_32px_rgba(0,0,0,0.2)]">
              <ResponsiveImage
                image={machine.galleryImages?.[0]}
                alt={machine.name}
                className="aspect-[4/3] w-full rounded-xl border border-brand-border bg-brand-surface-muted object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold text-brand-navy">{machine.name}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-text-muted">{machine.shortDescription}</p>
              <Link to={`/machines/${machine.id}`} className="mt-6 inline-flex text-sm font-semibold text-brand-red hover:text-brand-red-dark">
                View Details →
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
