import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center space-y-4">
      <p className="text-lg text-muted-foreground flex items-center space-x-2">
        <span>© {new Date().getFullYear()} Built for trust in AI.</span>
        <span>Made with <span role="img" aria-label="heart" className="text-primary">❤️</span> by Niranjana N. Nambiar.</span>
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={24} />
      </a>
    </footer>
  );
};
