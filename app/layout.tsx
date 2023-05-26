import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Sourav Choudhary",
  description:
    "Highly skilled software developer proficient in Java, Spring Boot, React.js with good experience of developing innovative solutions and collaborating effectively in team environments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen font-bodyFont bg-gradient-to-r from-body1 from-20% to-body2 t0-80% text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        {children}
      </body>
    </html>
  );
}