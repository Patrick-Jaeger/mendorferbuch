import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import pdfFile from "@/assets/ausschreibung.pdf";

import pdf1 from "@/assets/ausschreibung1.jpg";
import pdf2 from "@/assets/ausschreibung2.jpg";
import pdf3 from "@/assets/ausschreibung3.jpg";
import pdf4 from "@/assets/ausschreibung4.jpg";

const PDF_PATH = pdfFile;
const PDF_IMAGES = [pdf1, pdf2, pdf3, pdf4];

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

        <div className="w-full max-w-4xl rounded-xl overflow-hidden">

          {/* DESKTOP PDF */}
          <div className="hidden sm:block w-full">

            <iframe
              src={PDF_PATH + "#toolbar=1&navpanes=1&scrollbar=1"}
              className="w-full"
              style={{
                height: "90vh",
                border: "none"
              }}
            />

          </div>


          {/* MOBILE */}
          <div className="sm:hidden flex flex-col gap-4">

            <Button asChild size="lg">
              <a href={PDF_PATH} target="_blank">
                <Download className="mr-2" />
                PDF öffnen
              </a>
            </Button>

            {PDF_IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full rounded-lg shadow"
              />
            ))}

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
};

export default Index;