import Hero from '../components/home/Hero/Hero';
import Stats from '../components/home/Stats/Stats';
import AboutPreview from '../components/home/AboutPreview/AboutPreview';
import Categories from '../components/home/Categories/Categories';
import FeaturedMachines from '../components/home/FeaturedMachines/FeaturedMachines';
import WhyChooseUs from '../components/home/WhyChooseUs/WhyChooseUs';
import GalleryPreview from '../components/home/GalleryPreview/GalleryPreview';
import heroData from '../data/hero.json';
import companyData from '../data/company.json';
import statsData from '../data/stats.json';
import categoriesData from '../data/categories.json';
import machinesData from '../data/machines.json';
import galleryData from '../data/gallery.json';

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero data={heroData} company={companyData} />
      <Stats data={statsData} />
      <AboutPreview data={companyData} />
      <Categories data={categoriesData} />
      <FeaturedMachines data={machinesData} />
      <WhyChooseUs data={companyData} />
      <GalleryPreview data={galleryData} />
    </div>
  );
}
