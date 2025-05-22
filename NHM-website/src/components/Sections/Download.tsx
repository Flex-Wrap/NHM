import mockup from "../assets/mockup3.png";
import download from "../assets/download.svg";

const Download: React.FC = () => {
  return (
    <div
      className="page__content__block"
    >
        <div style={{ backgroundColor: "#002241", padding: "16px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "45px 72px" }}>
      <img src={mockup} alt="App Mockup" />
      <h3
        style={{maxWidth: "370px", color: "#fefefe"}}
      >Download the app and start your expedition...</h3>
      <img src={download} alt="Download Buttons" />
      </div>
    </div>
  );
};

export default Download;
