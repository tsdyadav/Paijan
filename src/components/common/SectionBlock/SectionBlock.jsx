import Container from '../Container/Container';

export default function SectionBlock({ children, className = '' }) {
  return (
    <section className={`py-16 sm:py-20 ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
