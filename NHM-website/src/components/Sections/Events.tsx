import React from "react";
import BlueCard from "../Cards/BlueCard";
import dyr from "../../assets/dyr.png";

const blueCards = [
  {
    title: "Experience the wild horses – with Peter Lassen",
    description: "Enjoy a truly special experience in Denmark’s most beautiful nature.",
  },
  {
    title: "Trip with Morten DD",
    description: "Join exciting nature tours with Morten DD. Find schedule and tickets here.",
  },
  {
    title: "Take part in the survey and win cool prizes.",
    description: "We’d like to get to know you and your cultural habits better.",
  },
  {
    title: "Earth Day Celebration",
    description: "Join us for a vibrant and inspiring Earth Day Celebration as we come together to honor and protect our planet!",
    isGrey: true,
  },
];

const Events: React.FC = () => (
  <div className="container main-content page__content__block">
    <h2 className="horizontal-scroll__header__content__title" style={{ marginBottom: 32 }}>
      Happening Now
    </h2>
    <div className="events-grid-au">
      <div className="events-grid-item">
        <BlueCard title={blueCards[0].title} description={blueCards[0].description} />
      </div>
      <div className="events-grid-item">
        <BlueCard title={blueCards[1].title} description={blueCards[1].description} />
      </div>
      <div className="events-grid-item">
        <BlueCard title={blueCards[2].title} description={blueCards[2].description} />
      </div>
      <div className="events-grid-item">
        <BlueCard title={blueCards[3].title} description={blueCards[3].description} isGrey />
      </div>
      <div className="events-grid-item">
        <div
          className="aubanner hastext aubanner-2 bg-dark-magenta csc-default"
          style={{
            backgroundColor: "rgb(0, 34, 65)",
            color: "rgb(254, 254, 254)",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a href="/" style={{ display: "block", height: "100%", position: "relative" }}>
            <img
              alt="The Global Backyard"
              src={dyr}
              style={{ width: "100%", height: "40%", objectFit: "cover", objectPosition: "bottom" }}
            />
            <div className="aubanner-content" style={{ padding: 16 }}>
              <h3 style={{ margin: 0 }}>Animals in Cities</h3>
              <p style={{ maxWidth: "90%" }}>
                Join Vimse on an adventure in the city, and meet lots of exciting animals.
              </p>
            </div>
            <button
              className="button button--icon--hide-label icon-link-internal button--icon"
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                zIndex: 2,
                backgroundColor: "#f5f6fa",
                color: "#003366",
                border: "none",
              }}
              title="Read more"
              aria-label="Read more"
              type="button"
              tabIndex={-1}
            />
          </a>
        </div>
      </div>
    </div>
    <style>
      {`
        .events-grid-au {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 24px;
        }
        /* Small cards: 1x1, big card: 2x2 on desktop */
        .events-grid-au > .events-grid-item:nth-child(1) { grid-column: 1; grid-row: 1; }
        .events-grid-au > .events-grid-item:nth-child(2) { grid-column: 2; grid-row: 1; }
        .events-grid-au > .events-grid-item:nth-child(3) { grid-column: 1; grid-row: 2; }
        .events-grid-au > .events-grid-item:nth-child(4) { grid-column: 2; grid-row: 2; }
        .events-grid-au > .events-grid-item:nth-child(5) { grid-column: 3 / span 2; grid-row: 1 / span 2; }

        @media (max-width: 900px) {
          .events-grid-au {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(5, auto);
          }
          .events-grid-au > .events-grid-item {
            grid-column: 1 !important;
            width: 100%;
          }
          .events-grid-au > .events-grid-item:nth-child(1) { grid-row: 1; }
          .events-grid-au > .events-grid-item:nth-child(2) { grid-row: 2; }
          .events-grid-au > .events-grid-item:nth-child(3) { grid-row: 3; }
          .events-grid-au > .events-grid-item:nth-child(4) { grid-row: 4; }
          .events-grid-au > .events-grid-item:nth-child(5) { grid-row: 5; grid-column: 1 !important; }
        }
      `}
    </style>
  </div>
);

export default Events;