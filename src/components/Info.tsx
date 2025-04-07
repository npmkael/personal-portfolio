import { BriefcaseBusiness, Projector, Wrench } from "lucide-react";
import BentoCard from "./BentoCard";
import Experience from "./Experience";
import { frontend, tools } from "@/constants";
import Technology from "./Technology";
import { projects } from "@/constants/Projects";
import ProjectCard from "./ProjectCard";

const Info = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
      <BentoCard
        className="col-span-1 md:col-span-4"
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
        className="col-span-1 md:col-span-2"
        delay="animate-delay-200"
        cardName="Experience"
        icon={<BriefcaseBusiness size={16} color="#797c80" />}
      >
        <div className="relative space-y-4 mt-4">
          <div className="absolute left-1.5 top-1.5 bottom-2 w-px bg-border"></div>

          <Experience
            title="BS Computer Science"
            year="2025"
            desc="Don Honorio Ventura State University"
            current={true}
          />

          <Experience
            title="Web Developer Intern"
            year="2024"
            desc="August 99"
          />
        </div>
      </BentoCard>

      <BentoCard
        className="col-span-1 md:col-span-6"
        delay="animate-delay-250"
        cardName="Tech Stack"
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
        delay="animate-delay-300"
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
    </section>
  );
};

export default Info;
