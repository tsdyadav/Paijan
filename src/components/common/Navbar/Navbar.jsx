import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import companyData from '../../../data/company.json';
import ResponsiveImage from '../ResponsiveImage';
import './Navbar.css';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Machines', to: '/machines' },
  { label: 'Straps', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-navy/95 shadow-sm backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-wide text-white">
          <ResponsiveImage image={companyData.logo} className="size-9 rounded-full object-contain" eager />
          <span>{companyData.name}</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-brand-red' : 'text-slate-200 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}
