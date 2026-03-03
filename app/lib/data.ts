export type Ipo = {
  id: number;
  name: string;
  slug: string;
  status: 'Open' | 'Upcoming' | 'Closed';
  openDate: string;
  closeDate: string;
  priceBand: string;
  lotSize: number;
  issueSize: string;
  registrar: string;
  leadManagers: string[];
  gmp: number;
  listingPriceEstimate: number;
  subscription: { qib: number; nii: number; retail: number };
  financials: { revenue: string; profit: string; eps: string };
  swot: string[];
  expertOpinion: string;
};

export const ipos: Ipo[] = [
  {
    id: 1,
    name: 'Nova Finserve Ltd',
    slug: 'nova-finserve-ltd',
    status: 'Open',
    openDate: '2026-03-01',
    closeDate: '2026-03-05',
    priceBand: '₹310-₹326',
    lotSize: 46,
    issueSize: '₹1,240 Cr',
    registrar: 'KFin Technologies',
    leadManagers: ['Axis Capital', 'ICICI Securities'],
    gmp: 58,
    listingPriceEstimate: 384,
    subscription: { qib: 14.2, nii: 8.3, retail: 3.7 },
    financials: { revenue: '₹3,420 Cr', profit: '₹486 Cr', eps: '₹18.2' },
    swot: ['Strong retail distribution', 'High RoE', 'Sector competition', 'Valuation sensitivity'],
    expertOpinion: 'Moderate risk with healthy medium-term upside for growth-focused investors.'
  },
  {
    id: 2,
    name: 'Metro Green Energy',
    slug: 'metro-green-energy',
    status: 'Upcoming',
    openDate: '2026-03-09',
    closeDate: '2026-03-12',
    priceBand: '₹210-₹220',
    lotSize: 68,
    issueSize: '₹860 Cr',
    registrar: 'Link Intime',
    leadManagers: ['JM Financial'],
    gmp: 22,
    listingPriceEstimate: 242,
    subscription: { qib: 0, nii: 0, retail: 0 },
    financials: { revenue: '₹1,120 Cr', profit: '₹122 Cr', eps: '₹9.3' },
    swot: ['Clean energy tailwinds', 'Strong order book', 'Execution risk', 'Policy dependency'],
    expertOpinion: 'Watch valuation versus peers before aggressive bidding.'
  },
  {
    id: 3,
    name: 'Swift Logistics',
    slug: 'swift-logistics',
    status: 'Closed',
    openDate: '2026-02-20',
    closeDate: '2026-02-24',
    priceBand: '₹145-₹152',
    lotSize: 98,
    issueSize: '₹540 Cr',
    registrar: 'Bigshare Services',
    leadManagers: ['SBI Capital'],
    gmp: -6,
    listingPriceEstimate: 146,
    subscription: { qib: 4.8, nii: 2.2, retail: 1.9 },
    financials: { revenue: '₹980 Cr', profit: '₹64 Cr', eps: '₹6.4' },
    swot: ['Pan-India network', 'Improving margins', 'Fuel cost risk', 'High working capital'],
    expertOpinion: 'Conservative investors may wait for post-listing stabilization.'
  }
];

export const blogs = [
  {
    id: 1,
    title: 'How to Evaluate IPO Valuation Like a Pro',
    slug: 'evaluate-ipo-valuation',
    category: 'Investment Guide',
    author: 'Riya Sharma',
    excerpt: 'A practical framework to compare IPO pricing with industry peers.',
    content: 'Use P/E, EV/EBITDA, growth quality, and cash flow consistency to estimate fair value.'
  },
  {
    id: 2,
    title: 'Top GMP Movers This Week',
    slug: 'top-gmp-movers-week',
    category: 'IPO News',
    author: 'Amit Verma',
    excerpt: 'A quick look at IPOs with strongest GMP momentum.',
    content: 'Strong subscription in QIB and improving market sentiment supported GMP expansion.'
  }
];
