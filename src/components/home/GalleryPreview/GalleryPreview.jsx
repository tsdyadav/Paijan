import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import GalleryGrid from '../../gallery/GalleryGrid/GalleryGrid';

export default function GalleryPreview({ data }) {
  const previewItems = data.items.slice(0, 4);

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <SectionHeader eyebrow={data.preview.eyebrow} title={data.preview.title} description={data.preview.description} align="center" />
        <GalleryGrid items={previewItems} contactLabel={data.page.contactLabel} />
      </Container>
    </section>
  );
}
