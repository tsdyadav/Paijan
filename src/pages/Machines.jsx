import { Helmet } from 'react-helmet-async';
import Container from '../components/common/Container/Container';
import SectionHeader from '../components/common/SectionHeader/SectionHeader';
import MachineCard from '../components/machine/MachineCard/MachineCard';
import machinesData from '../data/machines.json';

export default function Machines() {
  return (
    <Container className="space-y-12 py-16">
      <Helmet>
        <title>Machines | Paijan India</title>
        <meta name="description" content="Explore Paijan India’s precision manufacturing machine portfolio for industrial production needs." />
      </Helmet>

      <SectionHeader
        eyebrow="Machines"
        title="Industrial solutions built for precision"
        description="Explore our machine portfolio and discover the right fit for your production goals."
      />

      <div className="grid gap-6 rounded-2xl border border-brand-navy-secondary bg-brand-navy p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Manufacturing portfolio</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Engineered for durability, accuracy, and adaptability.</h3>
          <p className="mt-4 text-base leading-7 text-slate-200">
            Every system is designed to support reliable throughput, flexible deployment, and long-term performance in demanding production environments.
          </p>
        </div>

        <div className="rounded-xl border border-white/15 bg-white/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">At a glance</p>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <div className="flex items-center justify-between">
              <span>Available machines</span>
              <span className="font-semibold text-brand-red-light">{machinesData.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Engineering focus</span>
              <span className="font-semibold text-brand-red-light">Precision</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Deployment range</span>
              <span className="font-semibold text-brand-red-light">Industrial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {machinesData.map((machine) => (
          <MachineCard key={machine.id} machine={machine} />
        ))}
      </div>
    </Container>
  );
}
