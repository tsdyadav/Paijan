import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Card from '../../common/Card/Card';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function Categories({ data }) {
  return (
    <section className="bg-brand-surface-muted py-16">
      <Container className="space-y-8">
        <SectionHeader eyebrow="Machine Categories" title="Specialized manufacturing capabilities" description="Every category is structured for flexible production and reliable results." align="center" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.map((category) => (
            <Card key={category.id} className="p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-red/35 hover:shadow-[0_14px_30px_rgba(7,26,47,0.12)]">
              <ResponsiveImage image={category.image} alt={category.title} className="h-40 w-full rounded-xl border border-brand-border bg-brand-surface-muted object-cover" />
              <h3 className="mt-6 text-xl font-semibold text-brand-navy">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-text-muted">{category.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
