import "./globals.css";
import localFont from "next/font/local";

const hanken = localFont({
  src: [
    {
      path: "./../public/assets/fonts/HankenGrotesk-VariableFont_wght.ttf",
      weight: "100 900",     // specify the full weight range the variable font supports
      style: "normal",
    },
  ],
  display: "swap",          // recommended
  variable: "--font-hanken"// optional — creates a CSS variable you can use
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hanken.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
