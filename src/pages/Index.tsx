import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import pdfFile from "@/assets/ausschreibung.pdf";

const PDF_PATH = pdfFile;

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-sporty">
      {/* Header */}
      <header className="header-dynamic w-full py-8 sm:py-10 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Speed lines */}
          <div className="hidden sm:block">
            <div className="speed-line" style={{ top: '20%', left: '5%', width: '60px' }} />
            <div className="speed-line" style={{ top: '50%', left: '2%', width: '40px' }} />
            <div className="speed-line" style={{ top: '30%', right: '5%', width: '50px', background: 'linear-gradient(270deg, hsl(0 0% 0% / 0.4), transparent)' }} />
            <div className="speed-line" style={{ top: '70%', right: '8%', width: '35px', background: 'linear-gradient(270deg, hsl(0 0% 0% / 0.4), transparent)' }} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-black drop-shadow-lg">
            Mini Mäuse Mendorferbuch
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground tracking-widest uppercase">
            Laufverein
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 gap-6">
        {/* Download Button 
        <Button asChild size="lg" className="btn-sport text-base font-bold tracking-wide rounded-lg">
          <a href={PDF_PATH} download>
            <Download className="mr-2" />
            PDF herunterladen
          </a>
        </Button>
        */}

        {/* PDF Viewer */}
        <div className="pdf-border-glow w-full max-w-4xl rounded-xl overflow-hidden">
  <div className="bg-card rounded-xl overflow-hidden">

    {/* Desktop PDF Viewer */}
    <div className="hidden sm:block">
      <object
        data={PDF_PATH}
        type="application/pdf"
        className="w-full"
        style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
      >
        <p>PDF konnte nicht angezeigt werden.</p>
      </object>
    </div>

    {/* Mobile Button */}
<div className="sm:hidden p-8 flex flex-col items-center gap-4">
  <p className="text-black font-semibold">
    PDF kann auf dem Handy nicht direkt angezeigt werden.
  </p>

  <Button asChild size="lg" className="btn-sport font-bold text-lg px-6 py-4">
    <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
      <Download className="mr-2" />
      Ausschreibung als PDF öffnen
    </a>
  </Button>
</div>
  </div>
</div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
