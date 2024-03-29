import { Montserrat } from "next/font/google";
import "../../globals.css";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import NavbarStatic from "@/app/components/navbar-static";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <Navbar />
          <NavbarStatic />
          {children}
          <Footer />
      </body>
    </html>
  );
}
