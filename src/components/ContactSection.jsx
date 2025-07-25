import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Github,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Let’s Build <span className="text-primary">Something Real</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
{/* Left Side - Centered Contact Info */}
<div className="flex-1 flex flex-col justify-center items-center">
  <div className="w-full max-w-md space-y-10">
    
    {/* Section Heading */}
    <h4 className="text-xl font-semibold text-muted-foreground text-center">
      Connect with me
    </h4>

    {/* Email & Location */}
    <div className="space-y-4 text-center text-base">
      <div className="flex items-center justify-center gap-4">
        <Mail className="text-primary w-6 h-6" />
        <a
          href="mailto:niranjana.nambiar@mail.utoronto.ca"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          niranjana.nambiar@mail.utoronto.ca
        </a>
      </div>
      <div className="flex items-center justify-center gap-4">
        <MapPin className="text-primary w-6 h-6" />
        <span className="text-muted-foreground">
          Toronto, Canada
        </span>
      </div>
    </div>

    {/* Social Links */}
    <div className="space-y-3 text-center">
      <div className="flex justify-center gap-5">
        <a
          href="https://linkedin.com/in/niranjana-nambiar"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://github.com/nirancodes"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="w-6 h-6 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://x.com/Niranjana0227"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="w-6 h-6 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://devpost.com/nirancodes"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/public/devpost_logo_icon_169279.png"
            alt="Devpost"
            className="h-6 w-6 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </div>
  </div>
</div>


          {/* Right Side - Chat UI */}
          <div  id="portfoliochat" className="flex-1 space-y-6">
            <p className="text-md text-muted-foreground leading-relaxed">
              💬 <strong>PortfolioChat</strong> is a custom AI assistant trained
              on my work, projects, and papers. Use it to quickly explore what
              I’ve built and why it matters.
            </p>

            <iframe
              src="/niranchats"
              title="Portfolio Chat"
              className="w-full h-[500px] rounded-xl border border-muted shadow-md"
            ></iframe>

            <p className="text-xs text-muted-foreground">
              Chat powered by fine-tuned AI on my personal dataset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
