import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';
import FloatingWhatsapp from '../components/common/FloatingWhatsapp/FloatingWhatsapp';
import FloatingCall from '../components/common/FloatingCall/FloatingCall';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-text">
      <ScrollToTop />
      <Navbar />
      <main className="pt-24">{children}</main>
      <FloatingWhatsapp />
      <FloatingCall />
      <Footer />
    </div>
  );
}
