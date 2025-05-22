import React from 'react';

interface CardProps {
    imgSrc: string;
    header: string;
    text: string;
    link?: string;
    imgAlt?: string;
}

const Card: React.FC<CardProps> = ({
    imgSrc,
    header,
    text,
    link = "/",
    imgAlt = "",
}) => (
    <div className="aubanner hastext aubanner-2 bg-dark-magenta  csc-default" style={{ backgroundColor: "#f5f5f5" }}>
        <a href={link}>
            <img
                src={imgSrc}
                width="670"
                height="160"
                alt={imgAlt}
            />
            <div className="aubanner-content" style={{ padding: "0 16px" }}>
                <h3>{header}</h3>
                <p style={{fontSize: "13px"}}>{text}</p>
            </div>
        </a>
    </div>
);

export default Card;