import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  <span className="opacity-0 animate-fade-in">Hi, I'm</span>
  <span className="text-primary opacity-0 animate-fade-in-delay-1"> Niranjana</span>
  <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">N. Nambiar</span>
</h1>
<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
  Second-year <a
  href="https://www.ece.utoronto.ca/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary underline glow-link inline-block"
>Computer Engineering student at UofT</a>.  
  I craft explainable AI built for cyber resilience.  
  Real-world impact through interpretable ML, bulletproof deployments, and ops-driven design.
</p>



          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
  <a href="#projects" className="cosmic-button">
    View My Work
  </a>
  <a href="#portfoliochat" className="cosmic-button secondary-button">
    Try PortfolioChat
  </a>
</div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
