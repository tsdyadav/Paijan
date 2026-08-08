import { useState } from 'react';
import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Card from '../../common/Card/Card';

export default function FAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <SectionHeader eyebrow="FAQ" title="Helpful answers for buyers and partners" description="A concise guide to common questions about our manufacturing capabilities and process." align="center" />
        <div className="mx-auto max-w-3xl space-y-4">
          {data.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Card key={item.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-brand-navy">{item.question}</span>
                  <span className="text-2xl text-brand-red">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? <p className="px-6 pb-6 text-brand-text-muted">{item.answer}</p> : null}
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
