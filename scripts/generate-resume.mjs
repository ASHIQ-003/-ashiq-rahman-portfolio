import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "public", "resume.pdf");

async function main() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]);
  const body = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let y = 720;
  page.drawText("Ashiq Rahman", {
    x: 72,
    y,
    size: 22,
    font: bold,
    color: rgb(0.07, 0.09, 0.11),
  });
  y -= 30;
  page.drawText("Founder & CTO @ QueueFree | AI Systems Developer", {
    x: 72,
    y,
    size: 11,
    font: body,
    color: rgb(0.35, 0.33, 0.31),
  });
  y -= 36;
  page.drawText("Contact: sashiqrahman003@gmail.com", {
    x: 72,
    y,
    size: 10,
    font: body,
    color: rgb(0.4, 0.38, 0.36),
  });
  y -= 48;
  page.drawText("This is a starter PDF so your Resume button always works.", {
    x: 72,
    y,
    size: 10,
    font: body,
    color: rgb(0.45, 0.42, 0.4),
  });
  y -= 16;
  page.drawText("Replace this file with your final resume: public/resume.pdf", {
    x: 72,
    y,
    size: 10,
    font: body,
  });

  const bytes = await pdfDoc.save();
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, bytes);
  console.log("Wrote", out);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
