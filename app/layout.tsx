import type { Metadata } from "next";
import { Montserrat, Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import CustomCursor from "./Components/UI/CustomCursor";
import { ReduxProvider } from "./store/provider";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coral-Group",
  description: "Coral Group Buildtech pvt ltd is a leading construction company specializing in residential and commercial projects. With a commitment to quality and innovation, we deliver exceptional results that exceed client expectations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <AuthProvider>
            <ThemeProvider>
              {/* <CustomCursor /> */}
              {children}
              <Toaster position="top-right" />
            </ThemeProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
