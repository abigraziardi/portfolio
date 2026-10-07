import { EXTERNAL_LINKS } from "../constants/links";

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark pt-15 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap px-4 ">
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/2 md:px-10 xl:px-20">
            <h2 className="mb-5 text-4xl font-bold text-white">
              Abi Graziardi
            </h2>
            <h3 className="mb-2 text-2xl font-bold">Hubungi Saya</h3>
            <p>(+62) 812 1551 3552</p>
            <p>rakaabimantrag@gmail.com</p>
            <p>Yogyakarta, Indonesia.</p>
          </div>

          <div className="mb-12 w-full px-4 md:w-1/4 md:px-10 xl:px-20">
            <h3 className="mb-5 text-xl font-semibold text-white">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href={EXTERNAL_LINKS.github}
                  target="_blank"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.linkedin}
                  target="_blank"
                  className="mb-3 inline-block text-base hover:text-primary"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-slate-700 pt-10">
          <p className="text-center font-medium text-slate-500">
            &copy; 2026 · Abi Graziardi
          </p>
        </div>
      </div>
    </footer>
  );
}
