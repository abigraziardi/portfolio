import TextPrimary from "../../components/TextPrimary";
import { EXTERNAL_LINKS } from "../../constants/links";
import PortfolioCard from "./PortfolioCard";
import movieSearchAppImg from "/images/projects/movie-search-app.png";
import ticTacToeImg from "/images/projects/tic-tac-toe.png";
import toDoListImg from "/images/projects/to-do-list.png";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-25 pb-16 dark:bg-slate-700"
    >
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <TextPrimary style="text-dark dark:text-white">
              Portfolio Project
            </TextPrimary>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <PortfolioCard style="md:w-1/3">
            <PortfolioCard.Image
              link={EXTERNAL_LINKS.movieSearchApp}
              image={movieSearchAppImg}
              alt="movie-search-app"
            />
            <PortfolioCard.Title link={EXTERNAL_LINKS.movieSearchApp}>
              Movie Search
            </PortfolioCard.Title>
            <PortfolioCard.Desc>
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
            </PortfolioCard.Desc>
          </PortfolioCard>

          <PortfolioCard style="md:w-1/3">
            <PortfolioCard.Image
              link={EXTERNAL_LINKS.ticTacToe}
              image={ticTacToeImg}
              alt="tic-tac-toe"
            />
            <PortfolioCard.Title link={EXTERNAL_LINKS.ticTacToe}>
              Tic-Tac-Toe
            </PortfolioCard.Title>
            <PortfolioCard.Desc>
              Permainan tic-tac-toe yang bisa dimainkan melawan Player & CPU
              yang dibuat menggunakan React dan Tailwind CSS.
            </PortfolioCard.Desc>
          </PortfolioCard>

          <PortfolioCard style="md:w-1/3">
            <PortfolioCard.Image
              link={EXTERNAL_LINKS.toDoList}
              image={toDoListImg}
              alt="to-do-list"
            />
            <PortfolioCard.Title link={EXTERNAL_LINKS.toDoList}>
              To-Do List
            </PortfolioCard.Title>
            <PortfolioCard.Desc>
              Pembuatan to-do list dengan fitur checklist yang dibuat
              menggunakan React dan Tailwind CSS.
            </PortfolioCard.Desc>
          </PortfolioCard>
        </div>
      </div>
    </section>
  );
}
