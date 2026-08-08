import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container/Container';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import GalleryGrid from '../components/gallery/GalleryGrid/GalleryGrid';
import galleryData from '../data/gallery.json';

export default function Gallery() {
  return (
    <Container className="space-y-12 py-16">
      <Helmet>
        <title>{galleryData.page.seoTitle}</title>
        <meta name="description" content={galleryData.page.seoDescription} />
      </Helmet>

      <SectionHeader
        eyebrow={galleryData.page.eyebrow}
        title={galleryData.page.title}
        description={galleryData.page.description}
      />
      <GalleryGrid items={galleryData.items} contactLabel={galleryData.page.contactLabel} />
    </Container>
  );
}
