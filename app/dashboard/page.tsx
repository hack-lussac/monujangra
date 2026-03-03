import Link from 'next/link';
import { ipos } from '@/app/lib/data';
import { ipoPath } from '@/app/lib/paths';

export default function DashboardPage() {
  const totalIssueSize = ipos.map((ipo) => Number(ipo.issueSize.replace(/[^\d]/g, '')) || 0).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <h1 className="section-title">Monu Jangra IPO Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Tile title="Tracked IPOs" value={`${ipos.length}`} subtitle="Mainboard + SME" />
        <Tile title="Average GMP" value={`₹${Math.round(ipos.reduce((sum, ipo) => sum + ipo.gmp, 0) / ipos.length)}`} subtitle="Live estimate" />
        <Tile title="Combined Issue Size" value={`₹${totalIssueSize.toLocaleString()} Cr`} subtitle="Data from active universe" />
        <Tile title="Highest QIB" value={`${Math.max(...ipos.map((ipo) => ipo.subscription.qib)).toFixed(1)}x`} subtitle="Institutional demand" />
      </div>

      <div className="glass-card overflow-hidden p-0">
        <h2 className="border-b border-white/10 px-5 py-3 text-xl font-semibold text-white">IPO Monitoring Feed</h2>
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300"><tr><th className="px-4 py-2">Company</th><th className="px-4 py-2">Status</th><th className="px-4 py-2">GMP</th><th className="px-4 py-2">Subscription</th><th className="px-4 py-2">Details</th></tr></thead>
          <tbody>
            {ipos.map((ipo) => (
              <tr key={ipo.id} className="border-t border-white/10">
                <td className="px-4 py-2">{ipo.companyName}</td>
                <td className="px-4 py-2">{ipo.status}</td>
                <td className="px-4 py-2 text-[#00C853]">₹{ipo.gmp}</td>
                <td className="px-4 py-2">QIB {ipo.subscription.qib}x • NII {ipo.subscription.nii}x • Retail {ipo.subscription.retail}x</td>
                <td className="px-4 py-2"><Link className="text-[#7eb0ff] hover:underline" href={ipoPath(ipo.slug)}>Open IPO</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tile({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return <article className="glass-card p-4"><p className="text-xs uppercase text-slate-400">{title}</p><p className="mt-2 text-3xl font-bold text-white">{value}</p><p className="text-xs text-slate-300">{subtitle}</p></article>;
}
