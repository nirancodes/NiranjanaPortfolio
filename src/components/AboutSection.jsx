import { UserLock, Telescope, MonitorCog } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_0.8fr] gap-12 items-start">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Building trustworthy, explainable AI systems.
            </h3>
            <p className="text-muted-foreground">
              I'm a Computer Engineering student and an{" "}
              <a
                href="https://www.ece.utoronto.ca/join-the-ece-ambassador-program/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline glow-link"
              >
                ECE ambassador
              </a>{" "}
              at UofT specializing in interpretable ML, cyber-resilient
              infrastructure, and deployment pipelines. I build systems across
              CV, NLP, and symbolic ML where security, observability, and
              clarity are first-class priorities.
              <br />
              <br />
              Currently, I’m researching cyberattack detection in smart grids
              with the{" "}
              <a
                href="https://dkundur.comm.utoronto.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline glow-link"
              >
                Kundur Research Group
              </a>
              . I'm also leading perception tooling for the{" "}
              <a
                href="https://fsaeutoronto.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline glow-link"
              >
                UTFR Driverless team
              </a>{" "}
              — building automated cone labeling pipelines using Python and
              YOLOv8 to speed up AV training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Middle Column - Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <UserLock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    🔐 Interpretable & Secure ML
                  </h4>
                  <p className="text-muted-foreground">
                    Building resilient ML pipelines — from symbolic models to
                    YOLOv8 — with a focus on explainability and trust in
                    high-stakes systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Telescope className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    🛠 Systems & Observability
                  </h4>
                  <p className="text-muted-foreground">
                    Deploying fast, traceable AI systems across edge and cloud
                    using Docker, FastAPI, PostgreSQL, Prometheus, and Grafana.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MonitorCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    📚 Applied Research to Real Systems
                  </h4>
                  <p className="text-muted-foreground">
                    Translating cutting-edge research into tools — from FDIA
                    detection and GenAI workflows to drone-based CV systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <img
              src="/your-image-path.jpg"
              alt="Niranjana Nambiar"
              className="rounded-2xl shadow-lg w-72 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
