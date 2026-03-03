import Link from 'next/link';
import { ipos } from './lib/data';

const quickTabs = [
  'Mainboard IPOs & FPOs',
  'SME IPOs & FPOs',
  'NCD Issues',
  'Rights Issues',
  'Offer for Sale',
  'IPO Reports',
  'Stock Broker'
];

const upcomingFiled = [
  ['Oravel Stays', '31 Dec'],
  ['Bonfiglioli Transmissions', '09 Feb'],
  ['Marri Retail', '01 Feb'],
  ['SRIT India', '29 Jan'],
  ['Kanohar Electricals', '23 Jan'],
  ['Madhur Iron & Steel (India)', '23 Jan']
];

const upcomingApproved = [
  ['Alpine Texworld', '20 Feb'],
  ['Appl Containers', '20 Feb'],
  ['Anjali Labtech', '17 Feb'],
  ['Integris Medtech', '13 Feb'],
  ['Om Power Transmission', '13 Feb'],
  ['Duroflex', '12 Feb']
];

const rightsIssues = [
  ['Steelco Gujarat', '-', '-'],
  ['S. M. Gold', '-', '-'],
  ['Hilton Metal Forging', '24 Feb', '13 - 23 Mar'],
  ['Nexome Capital Markets', '05 Mar', '-'],
  ['Enbee Trade & Finance', '04 Mar', '12 - 20 Mar']
];

const ncdIssues = [
  ['Edelweiss Financial Services', '8.64 - 10.10', '02 - 16 Mar'],
  ['Chemmanur Credits & Investments', '9.25 - 12.68', '02 - 16 Mar'],
  ['Prachay Capital', '13.24 - 13.80', '26 Feb - 12 Mar'],
  ['IIFL Finance', '8.69 - 9.00', '17 Feb - 04 Mar'],
  ['Nashik Municipal Corporation', '-', '25 Feb - 02 Mar']
];

const ofsRows = [
  ['Indian Railway Finance Corporation', '25 Feb', '26 Feb'],
  ['Bharat Heavy Electricals', '11 Feb', '12 Feb'],
  ['Indigrid Infrastructure Trust', '05 Feb', '06 Feb'],
  ['Aanchal Ispat', '03 Feb', '04 Feb'],
  ['Hindustan Zinc', '28 Jan', '29 Jan']
];

const brokerCards = [
  'Zerodha',
  'Upstox',
  'ProStocks',
  'Paytm Money Limited'
];

export default function HomePage() {
  const mainboard = ipos.slice(0, 8);
  const sme = [...ipos].reverse().slice(0, 8);

  return (
    <div className="space-y-6 rounded-2xl bg-[#e8edf3] p-3 text-[#1f2937] md:p-6">
      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-[#0f172a] md:text-3xl">IPOs, NCDs, OFS, Rights Issues, Buyback and Stock Brokers</h1>
          <Link href="/gmp" className="rounded-md border border-[#1d4ed8] px-3 py-1 text-sm font-medium text-[#1d4ed8] hover:bg-blue-50">
            Open account offers
          </Link>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {quickTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-[#0f172a] shadow-sm"
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <TableCard title="Mainboard IPOs & FPOs 2026" columns={['Company', 'Issue Dates']} rows={mainboard.map((ipo) => [ipo.companyName, `${ipo.openDate} - ${ipo.closeDate}`])} />
        <TableCard title="SME IPOs & FPOs 2026" columns={['Company', 'Issue Dates']} rows={sme.map((ipo) => [ipo.companyName, `${ipo.openDate} - ${ipo.closeDate}`])} />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <TableCard title="Upcoming Mainboard IPOs (Filed)" columns={['Company', 'Filing Date']} rows={upcomingFiled} footerLink="More Upcoming Mainboard IPOs ..." />
        <TableCard title="Upcoming Mainboard IPOs (Approved)" columns={['Company', 'Approval Date']} rows={upcomingApproved} footerLink="More Upcoming Mainboard IPOs ..." />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <TableCard title="Rights Issue 2026" columns={['Company', 'Record', 'Issue Date']} rows={rightsIssues} />
        <TableCard title="NCD Issues 2026" columns={['Company', 'Effective Yield (%)', 'Issue Date']} rows={ncdIssues} highlightRows />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <TableCard title="Offer for sale (OFS) 2026" columns={['Company', 'Non Retail', 'Retail']} rows={ofsRows} footerLink="More OFS ..." />
        <TableCard title="Buyback 2026" columns={['Issuer Company', 'Issue Date', 'Record Date']} rows={[['No records found', '', '']]} footerLink="More Buyback ..." />
      </section>

      <section className="rounded-2xl bg-white p-6 text-center shadow-sm">
        <h2 className="text-3xl font-bold text-[#0f172a]">Stock Broker Reviews India</h2>
        <div className="mt-2 flex justify-center gap-6 text-sm font-medium">
          <span className="border-b-2 border-emerald-600 pb-1 text-emerald-700">Discount Brokers</span>
          <span className="pb-1 text-slate-500">Full-Service Brokers</span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {brokerCards.map((name) => (
            <article key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-xl font-semibold text-[#1d4ed8]">{name}</p>
              <p className="mt-2 text-sm text-slate-600">Detailed broker comparison, pricing and account opening links.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function TableCard({
  title,
  columns,
  rows,
  footerLink,
  highlightRows
}: {
  title: string;
  columns: string[];
  rows: string[][];
  footerLink?: string;
  highlightRows?: boolean;
}) {
  return (
    <article className="rounded-xl bg-[#f8fafc] p-3 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-2xl font-semibold text-[#111827]">{title}</h3>
      <div className="mt-3 overflow-x-auto rounded-md border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-[#111827]">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-3 py-2 font-semibold">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`} className={`border-t border-slate-200 ${highlightRows && rowIndex < 4 ? 'bg-emerald-100/70' : ''}`}>
                {columns.map((_, colIndex) => (
                  <td key={`${row[0]}-${colIndex}`} className="px-3 py-2 text-[#1d4ed8] first:text-[#0f172a]">
                    {row[colIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footerLink ? <p className="pt-4 text-center text-[#1d4ed8]">{footerLink}</p> : null}
    </article>
  );
}
