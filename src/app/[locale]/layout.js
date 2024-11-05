import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { AppProvider } from "@/context/AppContext";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Booking Events",
    template: "%s | Events",
  },
  description: "Website of musical events ",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className="container">
        <AppProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              <div className="content">{children}</div>
              <div className="footer">
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
