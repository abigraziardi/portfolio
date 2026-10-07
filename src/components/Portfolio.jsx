export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-25 pb-16 dark:bg-slate-700"
    >
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark upp sm:text-4xl lg:text-5xl dark:text-white">
              Portfolio Project
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/3">
            <div className="overflow-hidden rounded-md shadow-lg m-auto h-64 w-full max-w-80 cursor-pointer bg-secondary hover:scale-107 hover:shadow-2xl transition-transform">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full w-full"
              >
                <img
                  src="/img/projects/movie-search-app.png"
                  alt="movie-search-app"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-40"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="px-4 py-2 text-lg font-semibold text-white">
                    Lihat
                  </span>
                </div>
              </a>
            </div>
            <h3 className="mt-5 mb-3 text-center text-xl font-bold text-primary dark:text-white lg:text-left">
              Movie Search
            </h3>
            <p className="font-md text-base text-secondary text-justify dark:text-slate-400">
              Pencarian film menggunakan{" "}
              <a
                href="https://www.omdbapi.com/"
                target="_blank"
                className="cursor-pointer"
              >
                <span className="text-slate-600 font-semibold dark:text-slate-200 hover:text-primary">
                  OMDb API
                </span>
              </a>{" "}
              yang dibuat menggunakan React dan Tailwind CSS.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/3">
            <div className="overflow-hidden rounded-md shadow-lg m-auto h-64 w-full max-w-80 cursor-pointer bg-secondary hover:scale-107 hover:shadow-2xl transition-transform">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full w-full"
              >
                <img
                  src=""
                  alt="tic-tac-toe"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-40"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="px-4 py-2 text-lg font-semibold text-white">
                    Lihat
                  </span>
                </div>
              </a>
            </div>
            <h3 className="mt-5 mb-3 text-xl text-center font-bold text-primary dark:text-white lg:text-left">
              Tic-Tac-Toe
            </h3>
            <p className="font-md text-base text-secondary text-justify dark:text-slate-400">
              Permainan tic-tac-toe yang bisa dimainkan melawan Player & CPU
              yang dibuat menggunakan React dan Tailwind CSS.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/3">
            <div className="overflow-hidden rounded-md shadow-lg m-auto h-64 w-full max-w-80 cursor-pointer bg-secondary hover:scale-107 hover:shadow-2xl transition-transform">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full w-full"
              >
                <img
                  src="/img/projects/to-do-list.png"
                  alt="to-do-list"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-40"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="px-4 py-2 text-lg font-semibold text-white">
                    Lihat
                  </span>
                </div>
              </a>
            </div>
            <h3 className="mt-5 mb-3 text-xl text-center font-bold text-primary dark:text-white lg:text-left">
              To-Do List
            </h3>
            <p className="font-md text-base text-secondary text-justify dark:text-slate-400">
              Pembuatan to-do list dengan fitur checklist yang dibuat
              menggunakan React dan Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
