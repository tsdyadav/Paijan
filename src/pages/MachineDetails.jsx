import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/common/Container/Container';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import MachineGallery from '../components/machine/MachineGallery/MachineGallery';
import MachineSpecs from '../components/machine/MachineSpecs/MachineSpecs';
import machinesData from '../data/machines.json';

export default function MachineDetails() {
  const { machineId } = useParams();
  const machine = machinesData.find((item) => item.id === machineId);

  if (!machine) {
    return (
      <Container className="py-16">
        <Helmet>
          <title>Machine not found | Paijan India</title>
          <meta name="description" content="The requested machine detail page could not be found." />
        </Helmet>
        <SectionHeader title="Machine not found" description="The requested machine is unavailable." />
      </Container>
    );
  }

  return (
    <Container className="space-y-10 py-16">
      <Helmet>
        <title>{machine.name} | Paijan India</title>
        <meta name="description" content={machine.shortDescription} />
      </Helmet>

      <SectionHeader eyebrow="Machine Details" title={machine.name} description={machine.shortDescription} />

      <div className="rounded-2xl border border-brand-navy-secondary bg-brand-navy p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-brand-red/35 bg-brand-red/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red-light">
            {machine.category}
          </span>
          <span className="text-sm text-slate-200">Built for dependable industrial production</span>
        </div>
        <p className="mt-4 text-base leading-7 text-slate-200">{machine.longDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {machine.highlights?.map((highlight) => (
            <span key={highlight} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white">
              {highlight}
            </span>
          ))}
        </div>
        <Link to="/contact" className="mt-8 inline-flex rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-red-dark">
          Request a consultation
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <MachineGallery images={machine.galleryImages || []} />
        <MachineSpecs machine={machine} />
      </div>
    </Container>
  );
}
