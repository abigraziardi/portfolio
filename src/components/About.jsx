import { EXTERNAL_LINKS } from "../constants/links";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-10 dark:bg-dark md:pt-20 md:pb-20">
      <div className="container m-auto">
        <div className="flex flex-wrap justify-center m-auto lg:w-250">
          <div className=" w-full px-4 my-auto md:w-85">
            <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-4xl overflow-hidden shadow-lg w-70 m-auto md:w-80 md:right-0 md:mt-0 ">
              <img
                src="/img/profile.png"
                alt="profile"
                className="h-full w-full object-cover mx-auto"
              />
            </div>
          </div>

          <div className="w-full mt-5 px-8 md:w-160">
            <h3 className="mb-6 text-3xl font-bold text-primary  md:text-5xl">
              Tentang Saya
            </h3>
            <p className="mb-6 text-base font-medium text-secondary text-justify md:text-lg">
              Saya adalah lulusan S1 Informatika Universitas Pembangunan
              Nasional “Veteran” Yogyakarta, yang memiliki ketertarikan dan
              antusiasme pada Web Development. Memiliki pengalaman magang di
              instansi pemerintah dalam membangun antarmuka web & pengalaman
              sebagai freelance AI Annotator & Evaluator di Outlier AI. Terbiasa
              menyelesaikan berbagai proyek web akademis, baik secara mandiri
              maupun kolaboratif selama masa kuliah.
            </p>

            <div className="flex items-center">
              <a
                href={EXTERNAL_LINKS.github}
                target="blank"
                className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-500 hover:border-primary hover:bg-primary hover:text-white"
              >
                <img
                  src="/img/icons/github.svg"
                  alt="github"
                  width={25}
                  className="dark:brightness-0 dark:invert"
                />
              </a>

              <a
                href={EXTERNAL_LINKS.linkedin}
                target="blank"
                className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-500 hover:border-primary hover:bg-primary hover:text-white"
              >
                <img
                  src="/img/icons/linkedin.svg"
                  alt="linkedin"
                  width={20}
                  className="dark:brightness-0 dark:invert"
                />
              </a>
            </div>

            <h4 className="font-bold mt-5 text-lg md:text-xl ">
              <a href="#footer" className="text-primary hover:text-purple-700">
                Hubungi Saya
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
