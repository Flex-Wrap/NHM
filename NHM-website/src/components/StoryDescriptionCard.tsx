interface StoryDescriptionCardProps {
  imgSrc: string;
  iconSrc: string;
  iconAlt: string;
  header: string;
  text: string[];
  imgAlt?: string;
  reverse?: boolean;
}

const StoryDescriptionCard: React.FC<StoryDescriptionCardProps> = ({
  imgSrc,
  iconSrc,
  iconAlt = "",
  header,
  text,
  imgAlt = "",
  reverse = false,
}) => {
  const textBlock = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: "18px",
        backgroundColor: "#eaeaea",
        padding: "20px",
        maxWidth: "581px",
      }}
    >
      <div
        style={{
          display: "flex",
          columnGap: "8px",
          alignItems: "center",
        }}
      >
        <img src={iconSrc} alt={iconAlt} />
        <h4 style={{ margin: "0" }}>{header}</h4>
      </div>
      {text.map((paragraph, idx) => (
        <p key={idx} style={{ margin: "0" }}>
          {paragraph}
        </p>
      ))}
    </div>
  );

  const image = (
    <img src={imgSrc} alt={imgAlt} style={{ marginRight: "50px" }} />
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "45px 104px",
      }}
    >
      {reverse ? image : textBlock}
      {reverse ? textBlock : image}
    </div>
  );
};

export default StoryDescriptionCard;
