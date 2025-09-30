import { Rocket, Shield, Sparkles, Cpu } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Fast setup',
    desc: 'Start quickly with a Vite + React + Tailwind base, optimized for speed and DX.',
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Best practices, sensible defaults, and audited dependencies out of the box.',
  },
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Beautiful, accessible components and motion ready to elevate your brand.',
  },
  {
    icon: Cpu,
    title: '3D ready',
    desc: 'Seamless Spline integration for immersive, interactive hero experiences.',
  },
];

function Features() {
  return (
    <section id="features" className="relative w-full py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Everything you need to launch</h2>
          <p className="mt-3 text-muted-foreground">A focused set of tools and patterns to help you move from idea to production quickly.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 hover:shadow-[0_0_0_1px_hsl(var(--border))] transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-blue-500">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
