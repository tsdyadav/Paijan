import { motion } from 'framer-motion';
import Container from '../../common/Container/Container';
import Card from '../../common/Card/Card';
import CountUp from 'react-countup';

const Counter = CountUp.default ?? CountUp;

export default function Stats({ data }) {
  return (
    <section className="py-16">
      <Container>
        <Card className="grid gap-6 border-brand-border bg-brand-surface-muted p-8 sm:grid-cols-2 xl:grid-cols-4">
          {data.map((stat, index) => (
            <motion.div key={stat.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <p className="text-4xl font-semibold text-brand-red">
                <Counter end={Number(stat.value)} duration={2.5} suffix={stat.suffix || ''} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-brand-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </Card>
      </Container>
    </section>
  );
}
