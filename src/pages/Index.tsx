import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const PDF_PATH = "pdf/dateiname.pdf";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="w-full bg-primary py-6 px-4 shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground text-center tracking-tight uppercase">
          Mini Mäuse Mendorferbuch
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 gap-6">
        {/* Download Button */}
        <Button
          asChild
          size="lg"
          className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          <a href={PDF_PATH} download>
            <Download className="mr-2" />
            PDF herunterladen
          </a>
        </Button>

        {/* PDF Viewer */}
        <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <iframe
            src={PDF_PATH}
            title="Vereinsdokument"
            className="w-full border-0"
            style={{ height: "70vh", minHeight: "400px" }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
