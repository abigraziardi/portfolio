import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

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
