export type IpoStatus = 'Open' | 'Upcoming' | 'Closed' | 'Listed';

export type Ipo = {
  id: number;
  companyName: string;
  slug: string;
  status: IpoStatus;
  overview: string;
  openDate: string;
  closeDate: string;
  priceBandMin: number;
  priceBandMax: number;
  lotSize: number;
  issueSize: string;
  registrar: string;
  leadManagers: string[];
  gmp: number;
  gmpHistory: number[];
  subscription: { qib: number; nii: number; retail: number };
  financials: { revenue: string; profit: string; eps: string }[];
  swot: { strengths: string[]; weaknesses: string[]; opportunities: string[]; threats: string[] };
  riskMeter: 'Low' | 'Moderate' | 'High';
  faqs: { q: string; a: string }[];
};

export const ipos: Ipo[] = [
  {
    id: 1,
    companyName: 'TechNova Ltd',
    slug: 'technova-ltd',
    status: 'Open',
    overview: 'AI infrastructure and enterprise cloud automation company with strong recurring SaaS revenue.',
    openDate: '2026-03-01',
    closeDate: '2026-03-05',
    priceBandMin: 320,
    priceBandMax: 340,
    lotSize: 44,
    issueSize: '₹1,840 Cr',
    registrar: 'KFin Technologies',
    leadManagers: ['Axis Capital', 'ICICI Securities'],
    gmp: 85,
    gmpHistory: [60, 65, 72, 80, 85],
    subscription: { qib: 18.2, nii: 10.4, retail: 4.7 },
    financials: [
      { revenue: '₹2,980 Cr', profit: '₹438 Cr', eps: '₹16.2' },
      { revenue: '₹3,420 Cr', profit: '₹486 Cr', eps: '₹18.2' }
    ],
    swot: {
      strengths: ['Strong enterprise client retention', 'High operating leverage'],
      weaknesses: ['Premium valuation'],
      opportunities: ['Global AI infra spend tailwind'],
      threats: ['Cloud pricing competition']
    },
    riskMeter: 'Moderate',
    faqs: [
      { q: 'What is the minimum investment?', a: 'Around ₹14,960 based on upper band and lot size.' },
      { q: 'Is GMP official?', a: 'No, GMP is unofficial and should be used with fundamentals.' }
    ]
  },
  {
    id: 2,
    companyName: 'GreenEnergy',
    slug: 'greenenergy',
    status: 'Upcoming',
    overview: 'Renewable power EPC and utility-scale storage solutions provider.',
    openDate: '2026-03-09',
    closeDate: '2026-03-12',
    priceBandMin: 150,
    priceBandMax: 165,
    lotSize: 90,
    issueSize: '₹920 Cr',
    registrar: 'Link Intime',
    leadManagers: ['JM Financial'],
    gmp: 20,
    gmpHistory: [8, 12, 15, 18, 20],
    subscription: { qib: 0, nii: 0, retail: 0 },
    financials: [
      { revenue: '₹1,020 Cr', profit: '₹98 Cr', eps: '₹7.8' },
      { revenue: '₹1,210 Cr', profit: '₹126 Cr', eps: '₹9.4' }
    ],
    swot: {
      strengths: ['Policy support', 'Strong order book'],
      weaknesses: ['Execution-heavy model'],
      opportunities: ['Storage demand growth'],
      threats: ['Commodity volatility']
    },
    riskMeter: 'Moderate',
    faqs: [{ q: 'Can GMP change daily?', a: 'Yes, GMP changes with demand and market sentiment.' }]
  },
  {
    id: 3,
    companyName: 'FinEdge Capital',
    slug: 'finedge-capital',
    status: 'Closed',
    overview: 'Retail broking and wealth-tech platform focused on tier-2 penetration.',
    openDate: '2026-02-20',
    closeDate: '2026-02-24',
    priceBandMin: 210,
    priceBandMax: 225,
    lotSize: 66,
    issueSize: '₹1,150 Cr',
    registrar: 'Bigshare Services',
    leadManagers: ['SBI Capital'],
    gmp: 0,
    gmpHistory: [30, 22, 15, 5, 0],
    subscription: { qib: 8.4, nii: 4.2, retail: 2.9 },
    financials: [
      { revenue: '₹1,880 Cr', profit: '₹246 Cr', eps: '₹12.1' },
      { revenue: '₹2,210 Cr', profit: '₹288 Cr', eps: '₹13.8' }
    ],
    swot: {
      strengths: ['Growing demat user base'],
      weaknesses: ['Margin pressure'],
      opportunities: ['Cross-sell wealth products'],
      threats: ['Regulatory fee changes']
    },
    riskMeter: 'Low',
    faqs: [{ q: 'What does closed status mean?', a: 'The subscription window has ended and allotment is in process.' }]
  }
];

export const blogs = [
  {
    id: 1,
    title: 'TechNova IPO GMP Surges 25% – Should You Apply?',
    slug: 'technova-ipo-gmp-surges-25',
    category: 'IPO News',
    author: 'Riya Sharma',
    authorBio: 'SEBI-registered research analyst with 9+ years tracking primary markets.',
    excerpt: 'TechNova’s GMP momentum has accelerated. Here is a data-first framework before you apply.',
    content:
      '# Snapshot\nTechNova is commanding a strong grey market premium and healthy retail demand.\n\n## What is driving GMP?\nDemand from institutions, sector momentum and strong revenue quality are contributing factors.\n\n## Valuation check\nAt the upper price band, compare peers on growth, margin profile and return ratios.\n\n## Risks\nUnlisted market prices are unofficial and can reverse quickly near listing day.\n\n## Final take\nApply only if IPO size, valuation and risk profile match your allocation strategy.',
    metaTitle: 'TechNova IPO GMP Surges 25% - Apply or Skip?',
    metaDescription: 'A practical breakdown of TechNova IPO GMP move, valuation context and risks.'
  },
  {
    id: 2,
    title: 'Top GMP Movers This Week',
    slug: 'top-gmp-movers-week',
    category: 'Market Pulse',
    author: 'Amit Verma',
    authorBio: 'Market editor focused on listing-day trends and demand indicators.',
    excerpt: 'A quick look at IPOs with the strongest GMP momentum.',
    content: '# Weekly trend\nStrong institutional participation pushed GMP higher this week.',
    metaTitle: 'Weekly GMP Movers and Sentiment',
    metaDescription: 'Track the strongest GMP performers with context and risk notes.'
  }
];

export const adminUsers = [
  { id: 1, name: 'Admin User', email: 'admin@ipopulsepro.com', passwordHash: '08a37e6d93659305eb2ee0132ca21484:c1c6015bace0b8858cf37b694b174ec037ac6be5bbb15f7c19d61bcfbc9dc9f43e702415356c396e49a0d55d937fb2534c767e5ab51f4e39d0e4b4b6e3ca52a8', role: 'ADMIN' as const },
  { id: 2, name: 'Editor User', email: 'editor@ipopulsepro.com', passwordHash: '08a37e6d93659305eb2ee0132ca21484:c1c6015bace0b8858cf37b694b174ec037ac6be5bbb15f7c19d61bcfbc9dc9f43e702415356c396e49a0d55d937fb2534c767e5ab51f4e39d0e4b4b6e3ca52a8', role: 'EDITOR' as const }
];
