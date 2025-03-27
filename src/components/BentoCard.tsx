type Props = {
  cardName: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  delay?: string;
  className?: string;
};

const BentoCard = ({ cardName, icon, children, delay, className }: Props) => {
  return (
    <div
      className={`bento-card p-4 ${className} space-y-2 group animate-fade-in ${
        delay ? delay : ""
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-lg font-semibold">{cardName}</h2>
      </div>

      {children}
    </div>
  );
};

export default BentoCard;
