import Container from '../../common/Container/Container';
import Card from '../../common/Card/Card';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function AboutPreview({ data }) {
  return (
    <section className="bg-brand-surface-muted py-16">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="overflow-hidden p-2">
          <ResponsiveImage image={data.aboutImage} className="aspect-[4/3] h-full w-full rounded-[1.5rem] object-cover" />
        </Card>
        <Card className="p-8">
          <p className="text-lg leading-8 text-brand-text">{data.description}</p>
        </Card>
      </Container>
    </section>
  );
}
