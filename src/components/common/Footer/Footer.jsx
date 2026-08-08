import { motion } from 'framer-motion';
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import company from '../../../data/company.json';
import footer from '../../../data/footer.json';
import FooterColumn from './FooterColumn';
import Newsletter from './Newsletter';
import SocialLinks from './SocialLinks';
import ResponsiveImage from '../ResponsiveImage';

const fadeUp = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } };

function FooterLinks({ items }) {
  return <ul className="space-y-1.5">{items.map((item) => <li key={item.label}><Link className="text-xs leading-4 text-slate-300 transition hover:pl-1 hover:text-white focus:outline-none focus:text-white" to={item.to}>{item.label}</Link></li>)}</ul>;
}

export default function Footer() {
  const contactItems = [
    { icon: MapPin, label: footer.contact.addressLabel, content: company.address },
    { icon: Phone, label: footer.contact.phoneLabel, content: company.phone, href: company.phoneHref },
    { icon: Phone, label: 'Alternate phone', content: company.secondaryPhone, href: company.secondaryPhoneHref },
    { icon: Mail, label: footer.contact.emailLabel, content: company.email, href: company.emailHref },
    { icon: Clock3, label: footer.contact.hoursLabel, content: company.workingHours },
  ];

  return (
    <footer className="border-t border-brand-navy-secondary bg-brand-navy text-white">
      <Container className="py-4 sm:py-5">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, staggerChildren: 0.07 }} className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.45fr_.85fr_1fr_1.25fr_1.35fr]">
          <motion.section variants={fadeUp} className="max-w-xs">
            <div className="flex items-center gap-3">
              <ResponsiveImage image={company.logo} className="size-10 rounded-full object-contain ring-1 ring-white/10" />
              <p className="text-base font-bold tracking-tight text-white">{company.name}</p>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-300">{company.description}</p>
            <div className="mt-3"><SocialLinks links={footer.socialLinks} /></div>
          </motion.section>
          <motion.div variants={fadeUp}><FooterColumn heading={footer.quickLinks.heading}><FooterLinks items={footer.quickLinks.items} /></FooterColumn></motion.div>
          <motion.div variants={fadeUp}><FooterColumn heading={footer.machines.heading}><FooterLinks items={footer.machines.items} /></FooterColumn></motion.div>
          <motion.div variants={fadeUp}><FooterColumn heading={footer.contact.heading}><ul className="space-y-2">{contactItems.map(({ icon: Icon, label, content, href }) => <li key={label} className="flex gap-2 text-xs leading-4 text-slate-300"><Icon className="mt-0.5 size-4 shrink-0 text-brand-red" aria-hidden="true" /> <span><span className="sr-only">{label}: </span>{href ? <a className="transition hover:text-white" href={href}>{content}</a> : content}</span></li>)}</ul></FooterColumn></motion.div>
          <motion.div variants={fadeUp}><FooterColumn heading={footer.newsletter.heading}><Newsletter data={footer.newsletter} /></FooterColumn></motion.div>
        </motion.div>
        <div className="mt-5 flex flex-col gap-2 border-t border-white/15 pt-3 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal.copyright}</p>
          <nav aria-label="Legal links" className="flex gap-4">{footer.legal.links.map((link) => <Link key={link.label} to={link.to} className="transition hover:text-white">{link.label}</Link>)}</nav>
        </div>
      </Container>
    </footer>
  );
}
