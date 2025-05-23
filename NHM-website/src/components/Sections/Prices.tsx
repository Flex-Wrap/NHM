import React from "react";

interface PriceItem {
  name: string;
  href: string;
  bgColor?: string;
  textColor?: string;
}

const priceItems: PriceItem[] = [
  {
    name: "Ticket Prices",
    href: "https://unipress.dk/",
    bgColor: "#f5f5f5",
    textColor: "#0A0A0A",
  },
  {
    name: "Opening Hours",
    href: "//fuau.dk/",
  },
  {
    name: "Route and Parking",
    href: "http://danmarkshistorien.dk/",
    bgColor: "#f5f5f5",
    textColor: "#0A0A0A",
  },
  {
    name: "Contact Info",
    href: "http://aktuelnaturvidenskab.dk/",
  },
];

const Prices: React.FC = () => {
  // Dummy click handler for demonstration
  const onButtonClick = (name: string) => {
    alert(`Clicked icon button for ${name}`);
  };

  return (
    <div className="page__content__block">
      <div id="c2242800" className="csc-default">
        <div className="four row row--4">
          {priceItems.map(({ name, href, bgColor, textColor }, index) => (
            <div
              key={index}
              className={`large-3 medium-6 small-12 column row__item ${
                index === priceItems.length - 1 ? "last" : ""
              }`}
            >
              <div className="csc-default">
                <a
                  href={href}
                  className="button arrow left"
                  style={{
                    width: "100%",
                    textAlign: "left",
                    backgroundColor: bgColor,
                    color: textColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <span>{name}</span>
                  <button
                    className="button button--icon--hide-label icon-link-internal button--icon"
                    style={{
                      backgroundColor: "#f5f6fa",
                      color: "#003366",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.preventDefault(); // prevent navigating when clicking the button
                      onButtonClick(name);
                    }}
                    title={`Go to ${name}`}
                    aria-label={`Go to ${name}`}
                  >
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
