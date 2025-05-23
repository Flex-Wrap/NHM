import map from "../../assets/map.png";
import events from "../../assets/events.png";
import global from "../../assets/global-backyard.jpg";
import CardSecond from "../Cards/CardSecond";

const AppInfo: React.FC = () => {
  const cards = [
    {
      imgSrc: events,
      header: "Events Calendar",
      text: "See what’s happening today with an always-updated event calendar.",
      link: "/",
      imgAlt: "Events Calendar",
    },
    {
      imgSrc: map,
      header: "Interactive Map",
      text: "Navigate the museum with a live, interactive map that shows what’s around.",
      link: "/",
      imgAlt: "Interactive Map",
    },
  ];
  return (
    <>
      <div className="page__content__block">
        <h3 className="header__content__title" style={{ marginBottom: "28px" }}>
          One App. Many Experiences.
        </h3>
        <p style={{ margin: "0" }}>
          While you explore the expedition, don’t miss other powerful features
          designed to enhance your entire museum visit—from navigating spaces to
          unlocking hidden content in every exhibition.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "45px 27px",
            justifyContent: "space-between",
            marginTop: "45px",
          }}
        >
          {cards.map((card, idx) => (
            <div key={idx} style={{ maxWidth: "277px" }}>
              <CardSecond
                imgSrc={card.imgSrc}
                header={card.header}
                text={card.text}
                link={card.link}
                imgAlt={card.imgAlt}
              />
            </div>
          ))}
          <div>
            <CardSecond
              imgSrc={global}
              header="The Global Backyard"
              text="Discover “Global Backyard,” an interactive experience that educates you right from your phone."
              link="/"
              imgAlt="The Global Backyard"
              imgStyle={{
                maxHeight: "182px",
                width: "581px",
                objectFit: "cover",
              }}
              style={{
                backgroundColor: "#002241",
                color: "#fefefe"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppInfo;
