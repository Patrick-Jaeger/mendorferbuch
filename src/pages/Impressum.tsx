import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Impressum = () => (
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
      <h2 className="text-2xl font-bold mb-6">Impressum</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p>
          Mini Mäuse Mendorferbuch e.V.<br />
          Musterstraße 1<br />
          12345 Mendorferbuch
        </p>
        <p><strong>Vertreten durch:</strong><br />Max Mustermann (1. Vorsitzender)</p>
        <p><strong>Kontakt:</strong><br />E-Mail: info@mini-maeuse-mendorferbuch.de</p>
        <p><strong>Registereintrag:</strong><br />Eingetragen im Vereinsregister.<br />Registergericht: Amtsgericht Musterstadt<br />Registernummer: VR 12345</p>
        <p className="text-muted-foreground italic">— Platzhalter-Inhalte. Bitte durch echte Angaben ersetzen. —</p>
      </div>
    </main>

    <Footer />
  </div>
);

export default Impressum;
