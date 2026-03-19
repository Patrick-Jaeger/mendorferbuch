import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full py-5 px-6" style={{ background: 'linear-gradient(180deg, hsl(51 100% 48%), hsl(51 100% 42%))' }}>
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm font-medium">
      <Link
        to="/impressum"
        className="text-primary/80 hover:text-primary transition-colors tracking-wide"
      >
        Impressum
      </Link>
      <span className="hidden sm:inline text-muted-foreground/30">●</span>
      <Link
        to="/datenschutz"
        className="text-primary/80 hover:text-primary transition-colors tracking-wide"
      >
        Datenschutzerklärung
      </Link>
    </div>
  </footer>
);

export default Footer;
