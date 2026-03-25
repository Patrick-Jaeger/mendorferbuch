import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import pdfFile from "@/assets/ausschreibung.pdf";

// alle Seiten als Array für Mobile
import pdf1 from "@/assets/ausschreibung1.jpg";
import pdf2 from "@/assets/ausschreibung2.jpg";
import pdf3 from "@/assets/ausschreibung3.jpg";
import pdf4 from "@/assets/ausschreibung4.jpg";

// React-PDF-Viewer
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const PDF_IMAGES = [pdf1, pdf2, pdf3, pdf4];
const defaultLayoutPluginInstance = defaultLayoutPlugin();

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-sporty">
      {/* Header */}
      <header className="header-dynamic w-full py-8 sm:py-10 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
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
        <div className="pdf-border-glow w-full max-w-4xl rounded-xl overflow-hidden">
          <div className="bg-card rounded-xl overflow-hidden">

            {/* Desktop: Interaktiver PDF-Viewer */}
            <div className="hidden sm:block h-[90vh] min-h-[600px] w-full overflow-auto">
              <Worker workerUrl="/pdf-worker/pdf.worker.min.js">
                <Viewer
                  fileUrl={pdfFile}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </div>

            {/* Mobile: Bilder + Button */}
            <div className="sm:hidden flex flex-col items-center p-4 gap-4 overflow-auto w-full">
              {PDF_IMAGES.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`PDF Seite ${idx + 1}`}
                  className="rounded-lg shadow-lg w-full"
                />
              ))}
              <Button asChild size="lg" className="btn-sport font-bold">
                <a href={pdfFile} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" />
                  PDF öffnen
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