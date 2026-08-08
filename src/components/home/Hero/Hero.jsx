import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import Badge from '../../common/Badge/Badge';
import Card from '../../common/Card/Card';
import ResponsiveImage from '../../common/ResponsiveImage';

export default function Hero({ data, company }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-secondary py-24 sm:py-32">
      <ResponsiveImage image={data.backgroundImage} className="absolute inset-0 h-full w-full object-cover opacity-15" eager aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,25,32,0.18),_transparent_45%)]" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Badge>{data.eyebrow || company.tagline}</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{data.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={data.primaryAction.to}>{data.primaryAction.label}</Button>
            <Button to={data.secondaryAction.to} variant="secondary" className="border-white text-white hover:border-white hover:bg-white hover:text-brand-navy">{data.secondaryAction.label}</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-white/15 bg-white/10 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/15 bg-brand-navy-secondary">
              <ResponsiveImage image={data.machineImage} className="h-full w-full object-cover" eager />
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
