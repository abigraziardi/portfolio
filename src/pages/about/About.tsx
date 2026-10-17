import { EXTERNAL_LINKS } from "../../constants/links";
import profileImg from "/images/profiles/profile.png";
import githubIcon from "/images/icons/github.svg";
import linkedinIcon from "/images/icons/linkedin.svg";
import LogoLink from "./LogoLink";
import TextLink from "../../components/TextLink";
import TextPrimary from "../../components/TextPrimary";
import TextSecondary from "../../components/TextSecondary";
import ProfileImage from "./ProfileImage";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-10 dark:bg-dark md:pt-20 md:pb-20">
      <div className="container m-auto">
        <div className="flex flex-wrap justify-center m-auto lg:w-250">
          <ProfileImage image={profileImg} />

          <div className="w-full mt-5 px-8 md:w-160">
            <TextPrimary style="mb-6 text-primary text-center lg:text-left">
              Tentang Saya
            </TextPrimary>

            <TextSecondary>
              Saya adalah lulusan S1 Informatika Universitas Pembangunan
              Nasional “Veteran” Yogyakarta, yang memiliki ketertarikan dan
              antusiasme pada Web Development. Memiliki pengalaman magang di
              instansi pemerintah dalam membangun antarmuka web & pengalaman
              sebagai freelance AI Annotator & Evaluator di Outlier AI. Terbiasa
              menyelesaikan berbagai proyek web akademis, baik secara mandiri
              maupun kolaboratif selama masa kuliah.
            </TextSecondary>

            <div className="flex items-center mt-6">
              <LogoLink
                link={EXTERNAL_LINKS.github}
                image={githubIcon}
                alt="github"
              />

              <LogoLink
                link={EXTERNAL_LINKS.linkedin}
                image={linkedinIcon}
                alt="linkedin"
              />
            </div>

            <TextLink link="#footer" page="same-page">
              Hubungi Saya
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
