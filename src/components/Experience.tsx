type Props = {
  title: string;
  desc: string;
  year: string;
  current?: boolean;
};

const Experience = ({ title, desc, year, current }: Props) => {
  return (
    <div className="relative pl-6 group/role">
      <div
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${
          current
            ? "border-accent bg-accent"
            : "border-border bg-background group-hover/role:bg-accent"
        } transition-colors duration-150`}
      ></div>

      <div className="space-y-1">
        {/* Title */}
        <h3 className="text-sm font-semibold text-accent transition-colors duration-150">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          {/* Description */}
          <span className="text-xs text-foreground/70 dark:text-accent/70">
            {desc}
          </span>

          {/* Year */}
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-background border border-foreground/10">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
