import quotiations from "../../assets/quotations.svg";

const Quote: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "72px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          maxWidth: "860px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "28px",
          }}
        >
          <img src={quotiations} alt="Quotations Icon" />
          <h2 style={{ maxWidth: "730px" }}>
            “I understand the love behind it—the passion, the desperation to
            share something beautiful. But does understanding make it right?”
          </h2>
        </div>
        <h3 style={{ color: "#696969" }}>
          -<u>Knud Elmdahl</u>, photographer
        </h3>
      </div>
    </div>
  );
};

export default Quote;
