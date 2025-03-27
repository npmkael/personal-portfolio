import { BriefcaseBusiness } from "lucide-react";
import BentoCard from "./BentoCard";
import Experience from "./Experience";

const Info = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 gap-2 auto-rows-auto">
      <BentoCard
        className="cols-span-1 md:col-span-6"
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
        className="cols-span-1  md:col-span-2"
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
    </section>
  );
};

export default Info;
