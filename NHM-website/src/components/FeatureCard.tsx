import "../components/FeatureCard.css";

interface FeatureCardProps {
    imgSrc: string;
    header: string;
    text: string;
    imgAlt?: string;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    imgSrc,
    header,
    text,
    imgAlt = "",
    className = ""
}) => {
    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            rowGap: "10px",
            padding: "16px",
            maxWidth: "277px"
        }}
        className={`feature-card ${className}`}>
            <img src={imgSrc} alt={imgAlt} />
            <h4>{header}</h4>
            <p className="text--small">{text}</p>
        </div>
        </>
    );
}

export default FeatureCard;