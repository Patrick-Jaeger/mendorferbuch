import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import pdfFile from "@/assets/ausschreibung.pdf";

const PDF_PATH = pdfFile;

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-sporty">

      {/* HEADER */}
      <header className="header-dynamic w-full py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl font-black uppercase text-black">
            Mini Mäuse Mendorferbuch
          </h1>

          <p className="uppercase tracking-widest">
            Laufverein
          </p>

        </div>
      </header>


      {/* CONTENT */}
      <main className="flex-1 flex flex-col items-center px-4 py-6 gap-6 w-full">

        <div className="w-full max-w-5xl rounded-xl overflow-hidden">

          {/* PDF VIEWER DESKTOP + MOBILE */}

          <iframe
            src={
              PDF_PATH +
              "#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
            }
            className="w-full"
            style={{
              height: "90vh",
              border: "none"
            }}
          />


          {/* BUTTON */}
          <div className="flex justify-center mt-4">

            <Button asChild size="lg">

              <a href={PDF_PATH} target="_blank">

                <Download className="mr-2" />
                PDF im neuen Fenster öffnen

              </a>

            </Button>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
};

export default Index;