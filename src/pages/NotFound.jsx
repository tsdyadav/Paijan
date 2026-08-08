import Container from '../components/common/Container/Container';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <SectionHeader title="Page not found" description="The page you are looking for does not exist." />
    </Container>
  );
}
