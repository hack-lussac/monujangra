import { notFound } from 'next/navigation';
import { ipos } from '@/app/lib/data';
import { IpoDetailClient } from '@/app/components/ipo-detail-client';

export function generateStaticParams() {
  return ipos.map((ipo) => ({ slug: ipo.slug }));
}

export default function IpoDetailPage({ params }: { params: { slug: string } }) {
  const ipo = ipos.find((item) => item.slug === params.slug);
  if (!ipo) return notFound();

  return (
    <div className="space-y-6">
      <section className="glass-card p-6">
        <h1 className="text-3xl font-bold">{ipo.companyName}</h1>
        <p className="mt-2 text-slate-300">{ipo.overview}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-3">Open: {ipo.openDate}</div>
          <div className="rounded-xl bg-white/5 p-3">Close: {ipo.closeDate}</div>
          <div className="rounded-xl bg-white/5 p-3">Live GMP: <span className="font-bold text-[#00C853]">₹{ipo.gmp}</span></div>
        </div>
      </section>
      <IpoDetailClient ipo={ipo} />
    </div>
  );
}
