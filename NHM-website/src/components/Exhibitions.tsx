import React, { useRef, useEffect } from "react";
import Card from "./Card";
import hero1png from "../assets/hero1.png";

const cards = [
  {
    imgSrc: hero1png,
    header: "Bachelor",
    text: "Hvis du er i gang med eller har afsluttet en gymnasial eksamen, kan du søge ind på en 3-årig bacheloruddannelse. Find din bacheloruddannelse her",
    link: "//bachelor.au.dk/",
    imgAlt: "Bachelor"
  },
  {
    imgSrc: hero1png,
    header: "Master",
    text: "Læs videre på en 2-årig kandidatuddannelse efter din bachelor. Find din kandidatuddannelse her",
    link: "//kandidat.au.dk/",
    imgAlt: "Master"
  },

    {
    imgSrc: hero1png,
    header: "Master",
    text: "Læs videre på en 2-årig kandidatuddannelse efter din bachelor. Find din kandidatuddannelse her",
    link: "//kandidat.au.dk/",
    imgAlt: "Master"
  },

    {
    imgSrc: hero1png,
    header: "Master",
    text: "Læs videre på en 2-årig kandidatuddannelse efter din bachelor. Find din kandidatuddannelse her",
    link: "//kandidat.au.dk/",
    imgAlt: "Master"
  },

    {
    imgSrc: hero1png,
    header: "Master",
    text: "Læs videre på en 2-årig kandidatuddannelse efter din bachelor. Find din kandidatuddannelse her",
    link: "//kandidat.au.dk/",
    imgAlt: "Master"
  },

    {
    imgSrc: hero1png,
    header: "Master",
    text: "Læs videre på en 2-årig kandidatuddannelse efter din bachelor. Find din kandidatuddannelse her",
    link: "//kandidat.au.dk/",
    imgAlt: "Master"
  },
  // Add more card objects as needed
];

const Exhibitions: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    function activateButton(button: HTMLButtonElement | null) {
      if (!button) return;
      button.classList.remove("visually-disabled");
      button.setAttribute("aria-disabled", "false");
    }

    function disableButton(button: HTMLButtonElement | null) {
      if (!button) return;
      button.classList.add("visually-disabled");
      button.setAttribute("aria-disabled", "true");
    }

    function handleScroll() {
      if (!scrollElement || !prevBtn || !nextBtn) return;
      // Previous button
      if (scrollElement.scrollLeft <= 0) {
        disableButton(prevBtn);
      } else {
        activateButton(prevBtn);
      }
      // Next button
      if (scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth - 2) {
        disableButton(nextBtn);
      } else {
        activateButton(nextBtn);
      }
    }

    function handlePrev() {
      if (!scrollElement) return;
      scrollElement.scrollLeft -= 0.8 * scrollElement.clientWidth;
    }

    function handleNext() {
      if (!scrollElement) return;
      scrollElement.scrollLeft += 0.8 * scrollElement.clientWidth;
    }

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      // Initial state
      handleScroll();
    }
    if (prevBtn) prevBtn.addEventListener("click", handlePrev);
    if (nextBtn) nextBtn.addEventListener("click", handleNext);

    return () => {
      if (scrollElement) scrollElement.removeEventListener("scroll", handleScroll);
      if (prevBtn) prevBtn.removeEventListener("click", handlePrev);
      if (nextBtn) nextBtn.removeEventListener("click", handleNext);
    };
  }, []);

  return (
    <div className="page__content__block">
      <div className="horizontal-scroll horizontal-scroll--snap">
        <div className="horizontal-scroll__header">
          <div className="horizontal-scroll__header__content">
            <h3 className="horizontal-scroll__header__content__title">
              With scroll snapping
            </h3>
            <a className="link--arrow" href="#">
              More
            </a>
          </div>
          <ul
            className="horizontal-scroll__header__controls"
            aria-label="Controls for horizontal scroll panel"
          >
            <li>
              <button
                ref={prevBtnRef}
                className="button button--small button--icon button--icon--hide-label icon-previous visually-disabled"
                aria-disabled="true"
                type="button"
              >
                Scroll back
              </button>
            </li>
            <li>
              <button
                ref={nextBtnRef}
                className="button button--small button--icon button--icon--hide-label icon-next"
                aria-disabled="false"
                type="button"
              >
                Scroll forward
              </button>
            </li>
          </ul>
        </div>
        <div
          className="horizontal-scroll__scrollable-content"
          ref={scrollRef}
          role="region"
          tabIndex={0}
          aria-label="Horizontal scroll panel"
          aria-describedby="scroll-paddingsnap"
          style={{ overflowX: "auto", display: "flex" }}
        >
          <ul className="cards-container cards-container--row" style={{ display: "flex" }}>
            {cards.map((card, idx) => (
              <li className="horizontal-scroll__snap-item card" key={idx}>
                <Card
                  imgSrc={card.imgSrc}
                  header={card.header}
                  text={card.text}
                  link={card.link}
                  imgAlt={card.imgAlt}
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="horizontal-scroll__keyboard-instructions"
          id="scroll-paddingsnap"
        >
          Use arrow keys on your keyboard to explore
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
