export default function Hero() {
  return (
    <section
      id="home"
      className="flex justify-center items-center relative h-screen bg-[url(/img/background.jpg)] bg-cover bg-center bg-no-repeat dark:bg-dark"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[0.6px] dark:bg-black/50"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full p-4 flex flex-col justify-center items-center  m-auto max-w-110 lg:max-w-fit">
            <h1 className=" font-semibold text-center text-slate-300 md:text-2xl">
              Halo, saya{" "}
              <span className="mt-1 block text-4xl font-bold text-white lg:text-5xl">
                Raka Abimantra Graziardi
              </span>
            </h1>
            <h2 className="mb-10 mt-3 text-lg text-center font-medium text-white lg:text-2xl">
              &lt; Web Developer Enthusiast /&gt;
            </h2>

            <a
              href="#about"
              className="rounded-full bg-primary px-6 py-3 text-lg font-semibold shadow-lg text-white transition duration-300 ease-in-out hover:bg-purple-700"
            >
              Tentang Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
