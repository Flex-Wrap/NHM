import React from "react";

interface BlueCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  isGrey?: boolean;
}

const BlueCard: React.FC<BlueCardProps> = ({
  title,
  description,
  buttonLabel = "Read more",
  onButtonClick,
  isGrey = false,
}) => (
  <div
    style={{
      position: "relative",
      padding: "16px",
      backgroundColor: isGrey ? "#f5f5f5" : "rgb(0, 34, 65)",
      color: isGrey ? "#222" : "#fff",
      minHeight: 140,
      borderRadius: 0, // No rounded corners
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100%",
    }}
  >
    <h3 style={{ marginTop: 0 }}>{title}</h3>
    <p style={{ flex: 1, fontSize: 13 }}>{description}</p>
    <button
      className="button button--icon--hide-label icon-link-internal button--icon"
      style={{
        position: "absolute",
        bottom: 16,
        right: 16,
        zIndex: 1,
        backgroundColor: "#f5f6fa", // almost white, but not pure white
        color: "#003366",
        border: "none",
      }}
      onClick={onButtonClick}
      title={buttonLabel}
      aria-label={buttonLabel}
    />
  </div>
);

export default BlueCard;