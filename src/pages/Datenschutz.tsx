import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Datenschutz = () => (
  <div className="flex flex-col min-h-screen bg-background">
    <header className="w-full bg-primary py-4 px-4">
      <h1 className="text-xl sm:text-2xl font-extrabold text-primary-foreground text-center uppercase">
        Mini Mäuse Mendorferbuch
      </h1>
    </header>

    <main className="flex-1 max-w-3xl mx-auto px-4 py-10">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
      </Link>
      <h2 className="text-2xl font-bold mb-6">Datenschutzerklärung</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        <p><strong>1. Datenschutz auf einen Blick</strong></p>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        <p><strong>2. Verantwortliche Stelle</strong></p>
        <p>
          Mini Mäuse Mendorferbuch e.V.<br />
          Musterstraße 1<br />
          12345 Mendorferbuch<br />
          E-Mail: info@mini-maeuse-mendorferbuch.de
        </p>
        <p><strong>3. Datenerfassung auf dieser Website</strong></p>
        <p>Diese Website erhebt keine personenbezogenen Daten. Es werden keine Cookies gesetzt und keine Analyse-Tools verwendet.</p>
        <p className="text-muted-foreground italic">— Platzhalter-Inhalte. Bitte durch echte Datenschutzerklärung ersetzen. —</p>
      </div>
    </main>

    <Footer />
  </div>
);

export default Datenschutz;
