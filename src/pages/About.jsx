import PageBanner from '../components/common/PageBanner/PageBanner';
import SectionBlock from '../components/common/SectionBlock/SectionBlock';
import Card from '../components/common/Card/Card';
import companyData from '../data/company.json';
import statsData from '../data/stats.json';

export default function About() {
  return (
    <>
      <PageBanner
        badge="About Paijan India"
        title={companyData.aboutTitle}
        description={companyData.aboutDescription}
      />
      <SectionBlock>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-brand-navy">Our manufacturing ethos</h2>
            <p className="mt-4 text-brand-text-muted">{companyData.description}</p>
          </Card>
          <Card className="p-8">
            <h3 className="text-lg font-semibold text-brand-navy">Performance snapshot</h3>
            <ul className="mt-4 space-y-3 text-brand-text">
              {statsData.map((stat) => (
                <li key={stat.id} className="flex justify-between border-b border-brand-border pb-2">
                  <span>{stat.label}</span>
                  <span className="font-semibold text-brand-red">{stat.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionBlock>
    </>
  );
}
