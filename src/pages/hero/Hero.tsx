import TextPrimary from "../../components/TextPrimary";
import ButtonHero from "./ButtonHero";
import backgroundHero from "/images/backgrounds/background.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex justify-center items-center relative h-screen bg-cover bg-center bg-no-repeat dark:bg-dark"
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[0.6px] dark:bg-black/50"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full p-4 flex flex-col justify-center items-center  m-auto max-w-110 lg:max-w-fit">
            <h3 className=" font-semibold text-center text-lg text-slate-300 md:text-2xl">
              Halo, saya{" "}
            </h3>
            <TextPrimary style="text-white text-center">
              Raka Abimantra Graziardi
            </TextPrimary>
            <h3 className="mb-10 mt-4 text-xl text-center font-medium text-white lg:text-2xl">
              &lt; Web Developer Enthusiast /&gt;
            </h3>

            <ButtonHero link="about">Tentang Saya</ButtonHero>
          </div>
        </div>
      </div>
    </section>
  );
}
