import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-border/60 bg-background/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6">
            Modern • Digital • Innovative
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Build engaging digital experiences
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            A sleek starting point for modern, technology-forward products. Bring your ideas to life with a stunning 3D hero and clean UI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
              Explore Features
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-accent transition-colors">
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
