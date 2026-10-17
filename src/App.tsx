import Header from "./pages/header/Header";
import Hero from "./pages/hero/Hero";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Footer from "./pages/footer/Footer";

export default function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
