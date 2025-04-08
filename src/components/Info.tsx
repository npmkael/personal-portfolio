import {
  BriefcaseBusiness,
  ChevronRight,
  Mail,
  Projector,
  School,
  Wrench,
} from "lucide-react";
import BentoCard from "./BentoCard";
import Experience from "./Experience";
import { frontend, tools } from "@/constants";
import Technology from "./Technology";
import { projects } from "@/constants/Projects";
import ProjectCard from "./ProjectCard";
import Education from "./Education";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Info = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
      <BentoCard
        className="col-span-1 md:col-span-6 delay-75"
        delay="animate-delay-200"
        cardName="About"
        icon={<BriefcaseBusiness size={16} color="#797c80" />}
      >
        <p className="text-sm text-foreground/80 leading-relaxed">
          Hi! I'm an aspiring Front-End Developer with a passion for building
          clean, responsive, and user-friendly web interfaces. I specialize in
          JavaScript and Python, constantly honing my skills to create seamless
          digital experiences
          <br />
          <br />
          Currently, I'm focused on expanding my knowledge in modern frameworks
          and best practices to become a well-rounded developer ready to
          contribute to exciting projects.
        </p>
      </BentoCard>

      <BentoCard
        className="col-span-1 md:col-span-6"
        delay="animate-delay-250"
        cardName="Experience"
        icon={<BriefcaseBusiness size={16} color="#797c80" />}
      >
        <div className="relative space-y-4 mt-4">
          <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>
          <Experience
            title="Web Developer Intern"
            year="2024"
            organization="August 99"
            desc="Identified and resolved various technical issues, implemented fixes to improve site performance, and collaborated with the development team to maintain website integrity"
            logo="/aug-99-icon.png"
            technologies={[
              "/javascript-plain.svg",
              "/wordpress-plain.svg",
              "/php-plain.svg",
            ]}
          />
        </div>
      </BentoCard>
      <BentoCard
        cardName="Education"
        icon={<School size={16} color="#797c80" />}
        delay="animate-delay-300"
        className="col-span-1 md:col-span-6"
      >
        <div className="relative space-y-4 mt-4">
          <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>

          <Education
            title="BS Computer Science"
            year="2025 - Present"
            organization="Don Honorio Ventura State University"
            desc="Currently pursuing a degree in Computer Science."
            logo="/dhvsu-logo.png"
            current={true}
          />

          <Education
            title="Senior High School"
            year="2021 - 2023"
            organization="STI College"
            logo="/sti-logo.png"
            desc="Studied Information and Communications Technology (ICT) focusing on Web Development and Programming."
          />

          <Education
            title="Hello, World! 👋🏻"
            year="2020"
            desc="Wrote my first line of code."
          />
        </div>
      </BentoCard>

      <BentoCard
        className="col-span-1 md:col-span-6"
        delay="animate-delay-350"
        cardName="Technologies"
        icon={<Wrench size={16} color="#797c80" />}
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-1.5">
              {frontend.map((tech) => (
                <Technology name={tech.name} imgUrl={tech.imgUrl} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Tools</h3>
            <div className="flex flex-wrap gap-1.5">
              {tools.map((tool) => (
                <Technology name={tool.name} imgUrl={tool.imgUrl} />
              ))}
            </div>
          </div>
        </div>
      </BentoCard>
      <BentoCard
        className="col-span-1 md:col-span-6"
        delay="animate-delay-400"
        cardName="Projects"
        icon={<Projector size={16} color="#797c80" />}
        link="/projects"
      >
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              projectName={project.name}
              description={project.description}
              technologies={project.technologies}
              imgUrl={project.imgUrl}
              featured={project.featured}
            />
          ))}
        </div>
      </BentoCard>
      <BentoCard
        className="col-span-1 md:col-span-6"
        delay="animate-delay-450"
        cardName="Contact"
        icon={<Mail size={16} color="#797c80" />}
      >
        <div className="space-y-4">
          <a
            href="mailto:kielycarreon123@gmail.com"
            className="block p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors group dark:bg-background dark:hover:bg-background/60"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-foreground/70">Email</p>
                <p className="text-sm font-medium">kielycarreon123@gmail.com</p>
              </div>
              <ChevronRight
                size={14}
                className="group-hover:translate-x-0.5 transition-all duration-200"
              />
            </div>
          </a>
          <div>
            <p className="text-xs text-foreground/70 mb-2">Social Links</p>
            <div className="grid grid-cols-3 gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bryllim"
                className="flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors gap-2 dark:bg-background dark:hover:bg-background/60"
              >
                <FaGithub size={20} />
                <span className="text-sm text-foreground/70 hidden md:inline-block">
                  Github
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bryllim"
                className="flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors gap-1 dark:bg-background dark:hover:bg-background/60"
              >
                <FaLinkedin size={20} />
                <span className="text-sm text-foreground/70 hidden md:inline-block">
                  LinkedIn
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bryllim"
                className="flex items-center justify-center p-2 rounded-md bg-gray-100 dark:bg-background hover:bg-gray-200 transition-colors gap-1 dark:hover:bg-background/60"
              >
                <FaInstagram size={20} />
                <span className="text-sm text-foreground/70 hidden md:inline-block">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </BentoCard>
    </section>
  );
};

export default Info;
