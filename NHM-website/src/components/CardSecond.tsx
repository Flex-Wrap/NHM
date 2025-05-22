interface CardSecondProps {
        imgSrc: string;
        header: string;
        text: string;
        link?: string;
        imgAlt?: string;
        style?: React.CSSProperties;
        imgStyle?: React.CSSProperties;
    
    }
    
    const CardSecond: React.FC<CardSecondProps> = ({
        imgSrc,
        header,
        text,
        link = "/",
        imgAlt = "",
        style,
        imgStyle,
    }) => (
        <div className="aubanner hastext aubanner-2 bg-dark-magenta  csc-default" style={{ backgroundColor: "#f5f5f5", ...style }}>
            <a href={link}>
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    style={{width: "670", height: "160", ...imgStyle}}
                />
                <div className="aubanner-content" style={{ padding: "16px" }}>
                    <h4 style={{margin: "0"}}>{header}</h4>
                    <p style={{fontSize: "13px", maxWidth: "550px"}}>{text}</p>
                </div>
            </a>
        </div>
    );

export default CardSecond;