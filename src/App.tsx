import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Rules } from "./components/Rules";
import { AdminSection } from "./components/AdminSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Rules />
      <AdminSection />
      <Footer />
    </div>
  );
}
