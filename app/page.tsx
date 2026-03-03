import { HomeDashboard } from './components/home-dashboard';
import { ipos } from './lib/data';

export default function HomePage() {
  return (
    <div>
      <HomeDashboard ipos={ipos} />
      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <div className="glass-card p-4 text-slate-100">Smart AdSense placement</div>
        <div className="glass-card p-4 text-slate-100">Sticky ad banner area</div>
        <div className="glass-card p-4 text-slate-100">Affiliate integration cards</div>
        <div className="glass-card p-4 text-slate-100">Premium membership access</div>
      </section>
    </div>
  );
}
