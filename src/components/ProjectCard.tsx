import Technology from "./Technology";

type Props = {
  name: string;
  className: string;
  background: React.ReactNode;
  description: string;
  tools: {
    name: string;
    imgUrl: string;
  }[];
};

const ProjectCard = ({
  name,
  className,
  background,
  description,
  tools,
}: Props) => {
  return (
    <div
      className={`group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-lg bg-background border border-border ${
        className ? className : ""
      }`}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <h3 className="text-xl font-semibold text-mute">{name}</h3>
        <p className="max-w-lg text-neutral-400 text-sm">{description}</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 gap-2">
        {tools.map((tool) => (
          <Technology name={tool.name} imgUrl={tool.imgUrl} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};

export default ProjectCard;
