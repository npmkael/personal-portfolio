type Props = {
  title: string;
  desc: string;
  year: string;
  current?: boolean;
  logo?: string;
  organization?: string;
  technologies: string[];
};

const Experience = ({
  title,
  desc,
  year,
  current,
  logo,
  organization,
  technologies,
}: Props) => {
  return (
    <div className="relative pl-6 group/role">
      <div
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 
                    border-border${
                      current
                        ? "border-accent bg-accent"
                        : "border-border bg-background group-hover/role:bg-accent"
                    } transition-colors duration-150`}
      ></div>

      <div className="space-y-1">
        {/* Title */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold text-foreground transition-colors duration-150">
              {title}
            </h3>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-background border border-foreground/10">
              {year}
            </span>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              {logo && (
                <img src={logo} alt="logo" className="w-4 h-4 rounded-full" />
              )}
              {organization && (
                <span className="text-xs text-foreground/70">
                  {organization.length > 15
                    ? `${organization.slice(0, 15)}...`
                    : organization}
                </span>
              )}
            </div>
            <span className="text-xs text-foreground/70">Manila</span>
          </div>
        </div>

        <span className="text-xs text-foreground/90">{desc}</span>

        <div className="flex gap-2 items-center mt-2">
          {technologies?.map((tech) => (
            <button className="cursor-pointer" key={tech}>
              <img
                src={tech}
                alt={"tech logo"}
                width={18}
                height={18}
                className="dark:invert"
              />
            </button>
          ))}
        </div>

        {/* Year */}
      </div>
    </div>
  );
};

export default Experience;
