import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full bg-secondary text-secondary-foreground py-4 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
      <Link to="/impressum" className="hover:text-primary transition-colors">
        Impressum
      </Link>
      <span className="hidden sm:inline text-muted-foreground">|</span>
      <Link to="/datenschutz" className="hover:text-primary transition-colors">
        Datenschutzerklärung
      </Link>
    </div>
  </footer>
);

export default Footer;
