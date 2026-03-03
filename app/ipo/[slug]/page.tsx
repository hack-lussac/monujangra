import { notFound } from 'next/navigation';
import { ipos } from '@/app/lib/data';

export function generateStaticParams() {
  return ipos.map((ipo) => ({ slug: ipo.slug }));
}

export default function IpoDetailPage({ params }: { params: { slug: string } }) {
  const ipo = ipos.find((item) => item.slug === params.slug);
  if (!ipo) return notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: ipo.name,
    description: `${ipo.name} IPO detail with GMP and subscription breakdown`,
    provider: 'IPO Insider Pro'
  };

  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="card">
        <h1 className="text-3xl font-bold text-primary dark:text-white">{ipo.name}</h1>
        <p className="mt-2 text-sm text-slate-500">{ipo.openDate} to {ipo.closeDate} • {ipo.priceBand} • Lot {ipo.lotSize}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card"><h2 className="font-semibold">Issue Details</h2><ul className="mt-2 space-y-1 text-sm"><li>Issue Size: {ipo.issueSize}</li><li>Registrar: {ipo.registrar}</li><li>Lead Managers: {ipo.leadManagers.join(', ')}</li></ul></div>
        <div className="card"><h2 className="font-semibold">Live GMP</h2><p className={`mt-2 text-2xl font-bold ${ipo.gmp >= 0 ? 'text-gain' : 'text-loss'}`}>₹{ipo.gmp}</p><p className="text-sm">Estimated listing price: ₹{ipo.listingPriceEstimate}</p></div>
      </section>

      <section className="card">
        <h2 className="font-semibold">Subscription Breakdown</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3 text-center">
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">QIB<br/><span className="text-xl font-semibold">{ipo.subscription.qib}x</span></div>
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">NII<br/><span className="text-xl font-semibold">{ipo.subscription.nii}x</span></div>
          <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">Retail<br/><span className="text-xl font-semibold">{ipo.subscription.retail}x</span></div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card"><h2 className="font-semibold">Financial Performance</h2><ul className="mt-2 text-sm space-y-1"><li>Revenue: {ipo.financials.revenue}</li><li>Profit: {ipo.financials.profit}</li><li>EPS: {ipo.financials.eps}</li></ul></div>
        <div className="card"><h2 className="font-semibold">SWOT Analysis</h2><ul className="mt-2 list-disc pl-5 text-sm">{ipo.swot.map((point) => <li key={point}>{point}</li>)}</ul></div>
      </section>

      <section className="card">
        <h2 className="font-semibold">Expert Opinion</h2>
        <p className="mt-2 text-sm">{ipo.expertOpinion}</p>
      </section>

      <section className="card">
        <h2 className="font-semibold">FAQ</h2>
        <details className="mt-2"><summary>What is the minimum investment?</summary><p className="mt-1 text-sm">Minimum investment is approximately lot size multiplied by upper price band.</p></details>
        <details className="mt-2"><summary>How reliable is GMP?</summary><p className="mt-1 text-sm">GMP is an unofficial sentiment indicator and should be combined with fundamentals.</p></details>
      </section>
    </div>
  );
}
