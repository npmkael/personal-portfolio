type Props = {
  icon?: React.ReactNode;
  text: string;
  className?: string;
};

const LinkButton = ({ text, icon, className }: Props) => {
  return (
    <a
      className={`inline-flex h-7 md:h-8 items-center rounded-lg border border-[#e5e7eb] px-2.5 md:px-4 text-[10px] md:text-xs  transition-all duration-400 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap ${className} cursor-pointer`}
    >
      {icon}
      {text}
    </a>
  );
};

export default LinkButton;
