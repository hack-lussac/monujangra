import { notFound } from 'next/navigation';
import { ipos } from '@/app/lib/data';

export function generateStaticParams() {
  return ipos.map((ipo) => ({ slug: ipo.slug }));
}

export default function IpoDetailPage({ params }: { params: { slug: string } }) {
  const ipo = ipos.find((item) => item.slug === params.slug);
  if (!ipo) return notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ipo.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } }))
  };

  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="card">
        <h1 className="text-3xl font-bold">{ipo.companyName}</h1>
        <p className="mt-2 text-sm">{ipo.overview}</p>
        <p className="mt-2 text-sm text-slate-500">Timeline: {ipo.openDate} to {ipo.closeDate}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="card"><h2 className="font-semibold">Issue Snapshot</h2><ul className="mt-2 text-sm space-y-1"><li>Price Band: ₹{ipo.priceBandMin}-₹{ipo.priceBandMax}</li><li>Lot Size: {ipo.lotSize}</li><li>Issue Size: {ipo.issueSize}</li><li>Registrar: {ipo.registrar}</li><li>Lead Managers: {ipo.leadManagers.join(', ')}</li></ul></div>
        <div className="card"><h2 className="font-semibold">Live GMP</h2><p className="mt-2 text-3xl font-bold text-gain">₹{ipo.gmp}</p><p className="text-sm">Risk Meter: {ipo.riskMeter}</p></div>
      </section>
      <section className="card"><h2 className="font-semibold">Subscription</h2><p className="mt-2 text-sm">QIB {ipo.subscription.qib}x • NII {ipo.subscription.nii}x • Retail {ipo.subscription.retail}x</p></section>
      <section className="card"><h2 className="font-semibold">Financial Table</h2>{ipo.financials.map((f, idx) => <p key={idx} className="mt-2 text-sm">Revenue {f.revenue} | Profit {f.profit} | EPS {f.eps}</p>)}</section>
      <section className="card"><h2 className="font-semibold">SWOT</h2><p className="text-sm mt-2">Strengths: {ipo.swot.strengths.join(', ')}</p><p className="text-sm">Weaknesses: {ipo.swot.weaknesses.join(', ')}</p><p className="text-sm">Opportunities: {ipo.swot.opportunities.join(', ')}</p><p className="text-sm">Threats: {ipo.swot.threats.join(', ')}</p></section>
      <section className="card"><h2 className="font-semibold">FAQ</h2>{ipo.faqs.map((faq) => <details key={faq.q} className="mt-2"><summary>{faq.q}</summary><p className="text-sm mt-1">{faq.a}</p></details>)}</section>
    </div>
  );
}
