import ProjectItem from "@/components/ProjectItem/ProjectItem";

import leoShopImage1 from "@/assets/images/project-previews/leoshop/1.png";
import leoShopImage10 from "@/assets/images/project-previews/leoshop/10.png";
import leoShopImage11 from "@/assets/images/project-previews/leoshop/11.png";
import leoShopImage12 from "@/assets/images/project-previews/leoshop/12.png";
import leoShopImage13 from "@/assets/images/project-previews/leoshop/13.png";
import leoShopImage2 from "@/assets/images/project-previews/leoshop/2.png";
import leoShopImage3 from "@/assets/images/project-previews/leoshop/3.png";
import leoShopImage4 from "@/assets/images/project-previews/leoshop/4.png";
import leoShopImage5 from "@/assets/images/project-previews/leoshop/5.png";
import leoShopImage6 from "@/assets/images/project-previews/leoshop/6.png";
import leoShopImage7 from "@/assets/images/project-previews/leoshop/7.png";
import leoShopImage8 from "@/assets/images/project-previews/leoshop/8.png";
import leoShopImage9 from "@/assets/images/project-previews/leoshop/9.png";

import fitNetImage8 from "@/assets/images/project-previews/fit-net/client-profile.png";
import fitNetImage2 from "@/assets/images/project-previews/fit-net/hero.png";
import fitNetImage3 from "@/assets/images/project-previews/fit-net/login.png";
import fitNetImage6 from "@/assets/images/project-previews/fit-net/messages.png";
import fitNetImage7 from "@/assets/images/project-previews/fit-net/notifications.png";
import fitNetImage9 from "@/assets/images/project-previews/fit-net/review-modal.png";
import fitNetImage5 from "@/assets/images/project-previews/fit-net/search-filter.png";
import fitNetImage4 from "@/assets/images/project-previews/fit-net/search-no-filter.png";
import fitNetImage1 from "@/assets/images/project-previews/fit-net/thumbnale.png";

import noBullyingImage1 from "@/assets/images/project-previews/no-bullying/hero.png";
import noBullyingImage3 from "@/assets/images/project-previews/no-bullying/quiz-results.png";
import noBullyingImage2 from "@/assets/images/project-previews/no-bullying/quiz.png";

import restCountriesImage2 from "@/assets/images/project-previews/rest-countries/country.png";
import restCountriesImage1 from "@/assets/images/project-previews/rest-countries/main.png";

import styles from "./ProjectList.module.scss";

const projects = [
  {
    position: "Full stack developer",
    title: "LeoShop: Furniture\ne-commerce, done right",
    tags: [
      "nextjs",
      "typescript",
      "react",
      "mongodb",
      "mongoose",
      "sass",
      "nodemailer",
      "cloudinary",
      "jose (JWT)",
      "zod",
      "react hook form",
    ],
    description:
      "Browse, order, and manage all things furniture. The app features a filterable product catalog, persistent guest/user carts, admin dashboard with automated order-lifecycle emails sent via Nodemailer, and custom JWT auth with Google OAuth.",
    images: [
      leoShopImage1,
      leoShopImage2,
      leoShopImage3,
      leoShopImage4,
      leoShopImage5,
      leoShopImage6,
      leoShopImage7,
      leoShopImage8,
      leoShopImage9,
      leoShopImage10,
      leoShopImage11,
      leoShopImage12,
      leoShopImage13,
    ],
    video: "/videos/leoshop-demo.mp4",
    href: "https://leoshop.dikhtyar.dev",
  },
  {
    position: "Full stack developer / Founder",
    title: "FitNet: Social network connecting fitness coaches and clients",
    tags: [
      "nextjs",
      "typescript",
      "supabase",
      "sass",
      "react",
      "stadia maps",
      "authjs",
      "zod",
      "react hook form",
      "websockets",
    ],
    description:
      "Find personal trainers near you or grow your network of clients as a coach in a matter of few clicks! The app features filterable interactive map of user profiles, real-time messaging and notification system built with websockets.",
    images: [
      fitNetImage1,
      fitNetImage2,
      fitNetImage3,
      fitNetImage4,
      fitNetImage5,
      fitNetImage6,
      fitNetImage7,
      fitNetImage8,
      fitNetImage9,
    ],
    video: "/videos/fitnet-demo.mp4",
    href: "https://fitnet.app",
  },
  {
    position: "Frontend developer",
    title: "REST Countries: API powered country database",
    tags: ["react", "react-router", "typescript", "sass", "rest-countries API"],
    description:
      "Learn more about the countries across the globe in the form of cards! The app features a filterable and sortable list of country cards with the data pulled from the REST Countries API, along with a color theme switcher, infinite scroll and search by name functionality.",
    images: [restCountriesImage1, restCountriesImage2],
    video: "/videos/rest-countries-demo.mp4",
    href: "https://rest-countries.app",
  },
  {
    position: "Frontend developer / Founder",
    title: "no-bullying.org: Online platform helping the victims of bullying",
    tags: ["nextjs", "typescript", "sass", "react"],
    description:
      "Learn more about bullying and pass our quiz to get the concrete steps to solve the problem. The app features static site generation (SSG), interactive quiz with personalized results and a seamless bilingual experience.",
    images: [noBullyingImage1, noBullyingImage2, noBullyingImage3],
    video: "/videos/no-bullying-demo.mp4",
    href: "https://no-bullying.org",
  },
];

export default function ProjectList() {
  return (
    <ul className={styles["project-list"]}>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </ul>
  );
}
