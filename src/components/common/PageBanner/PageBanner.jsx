import { motion } from 'framer-motion';
import Container from '../Container/Container';
import Badge from '../Badge/Badge';

export default function PageBanner({ badge, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <section className="border-b border-brand-navy-secondary bg-gradient-to-br from-brand-navy to-brand-navy-secondary py-20 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`max-w-3xl ${alignClass}`}
        >
          {badge ? <Badge className="mb-5">{badge}</Badge> : null}
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          {description ? <p className="mt-5 text-lg leading-8 text-slate-200">{description}</p> : null}
        </motion.div>
      </Container>
    </section>
  );
}
