type Props = {
  name: string;
  imgUrl?: string;
};

const Technology = ({ name, imgUrl }: Props) => {
  return (
    <div className="flex items-center gap-1 bg-background border border-foreground/10 px-2 py-0.5 rounded-md">
      {imgUrl && (
        <img
          src={imgUrl}
          alt={name}
          width={13}
          height={13}
          className="dark:invert"
        />
      )}
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default Technology;
