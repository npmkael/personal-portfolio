import Technology from "./Technology";
import { CodeSquareIcon, Orbit, Star } from "lucide-react";

type Props = {
  projectName: string;
  description: string;
  technologies: string[];
  imgUrl: string;
  featured?: boolean;
  liveDemo?: string;
  sourceCode?: string;
};

const ProjectCard = ({
  projectName,
  description,
  technologies,
  imgUrl,
  featured = false,
  liveDemo = "#",
  sourceCode,
}: Props) => {
  return (
    <div className="border border-border flex flex-col rounded-lg justify-between">
      <div>
        <img
          src={imgUrl}
          alt="project"
          className="opacity-60 object-cover w-full h-48 rounded-tr-lg rounded-tl-lg"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">{projectName}</h2>

            {featured && (
              <div className="flex items-center gap-1 px-2 py-0.5 text-xs border border-border rounded-full">
                <Star size={14} />
                <span>Featured</span>
              </div>
            )}
          </div>
          <p className="text-sm text-foreground/60 mb-3.5">{description}</p>
          <div className="flex gap-1 flex-wrap">
            {technologies.map((tech) => (
              <Technology key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-2.5 border-t border-border flex justify-evenly gap-1">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 flex-1 rounded-md px-2.5 py-2 transition-colors duration-200 justify-center bg-foreground text-background text-sm ${
            liveDemo === "#"
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-foreground/80 cursor-pointer"
          }`}
        >
          <Orbit size={14} />
          Live Demo
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sourceCode}
          className={`flex items-center gap-1 border border-border rounded-md px-2.5 py-2 hover:bg-border/20 transition-colors duration-200 flex-1 justify-center text-sm ${
            sourceCode ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          <CodeSquareIcon size={14} />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
