interface StoryDescriptionCardProps {
    imgSrc: string;
    iconSrc: string;
    iconAlt: string;
    header: string;
    text: string[];
    imgAlt?: string;
}

const StoryDescriptionCard: React.FC<StoryDescriptionCardProps> = ({
    imgSrc,
    iconSrc,
    iconAlt = "",
    header,
    text,
    imgAlt = "" 
}) => {
    return (
        <>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "45px 104px",
        }}>
            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    rowGap: "18px",
                    backgroundColor: "#fefefe",
                    padding: "20px",
                    maxWidth: "581px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        columnGap: "4px",
                        alignItems: "center",
                    }}
                >
                    <img src={iconSrc} alt={iconAlt}/>
                    <h4>{header}</h4>
                </div>
                {text.map((paragraph, idx) => (
                    <p 
                        key={idx}
                        style={{
                            margin: "0",}}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
            <img src={imgSrc} alt={imgAlt}/>
        </div>
        </>
    );
}

export default StoryDescriptionCard;