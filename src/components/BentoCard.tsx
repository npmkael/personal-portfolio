import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

type Props = {
  cardName: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  delay?: string;
  className?: string;
  link?: string;
};

const BentoCard = ({
  cardName,
  icon,
  children,
  delay,
  className,
  link,
}: Props) => {
  return (
    <div
      className={`bento-card p-4 ${className} space-y-2 animate-fade-in ${
        delay ? delay : ""
      }`}
    >
      {link ? (
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {icon}
            <h2 className="text-lg font-semibold">{cardName}</h2>
          </div>

          <a
            href={link}
            className="text-xs text-neutral-600 flex items-center gap-1"
          >
            View All <ChevronRight size={14} />
          </a>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-lg font-semibold">{cardName}</h2>
        </div>
      )}

      {children}
    </div>
  );
};

export default BentoCard;
