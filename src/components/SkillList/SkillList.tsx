import SkillItem from "@/components/SkillItem/SkillItem";

import GearsSVG from "@/assets/icons/gears.svg";
import CssSVG from "@/assets/icons/logos/css.svg";
import ExpressSVG from "@/assets/icons/logos/express.svg";
import FigmaSVG from "@/assets/icons/logos/figma.svg";
import GitSVG from "@/assets/icons/logos/git.svg";
import GitHubSVG from "@/assets/icons/logos/github.svg";
import HtmlSVG from "@/assets/icons/logos/html.svg";
import JavaScriptSVG from "@/assets/icons/logos/javascript.svg";
import MongoSVG from "@/assets/icons/logos/mongodb.svg";
import NextJsSVG from "@/assets/icons/logos/nextjs.svg";
import NodeSVG from "@/assets/icons/logos/nodejs.svg";
import PostmanSVG from "@/assets/icons/logos/postman.svg";
import ReactSVG from "@/assets/icons/logos/react.svg";
import SassSVG from "@/assets/icons/logos/sass.svg";
import SupabaseSVG from "@/assets/icons/logos/supabase.svg";
import TypeScriptSVG from "@/assets/icons/logos/typescript.svg";

import styles from "./SkillList.module.scss";

const skills = [
  {
    icon: HtmlSVG,
    label: "HTML",
  },
  {
    icon: CssSVG,
    label: "CSS",
  },
  {
    icon: SassSVG,
    label: "Sass",
  },
  {
    icon: JavaScriptSVG,
    label: "JavaScript",
  },
  {
    icon: TypeScriptSVG,
    label: "TypeScript",
  },
  {
    icon: ReactSVG,
    label: "React",
  },
  {
    icon: NextJsSVG,
    label: "Next.js",
  },
  {
    icon: SupabaseSVG,
    label: "Supabase",
  },
  {
    icon: NodeSVG,
    label: "Node.js",
  },
  {
    icon: ExpressSVG,
    label: "Express.js",
  },
  {
    icon: MongoSVG,
    label: "MongoDB",
  },
  {
    icon: PostmanSVG,
    label: "Postman",
  },
  {
    icon: GitSVG,
    label: "Git",
  },
  {
    icon: GitHubSVG,
    label: "GitHub",
  },
  {
    icon: GearsSVG,
    label: "RESTful APIs",
  },
  {
    icon: FigmaSVG,
    label: "Figma",
  },
];

export default function SkillsList() {
  return (
    <ul className={styles["skill-list"]}>
      {skills.map((skill) => (
        <SkillItem key={skill.label} skill={skill} />
      ))}
    </ul>
  );
}
