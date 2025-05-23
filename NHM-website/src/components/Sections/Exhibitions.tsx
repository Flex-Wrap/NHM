import React, { useRef, useEffect } from "react";
import Card from "../Cards/Card";
import beetles from "../../assets/beetles.jpg";
import oops from "../../assets/oops.jpg";
import safari from "../../assets/safari.jpg";
import global from "../../assets/global-backyard.jpg";
import nature from "../../assets/nature.jpg";

const cards = [
  {
    imgSrc: beetles,
    header: "BEETLES!",
    text: "A striking collection of beetles from around the world, celebrating their beauty and diversity.",
    link: "/",
    imgAlt: "BEETLES!",
  },
  {
    imgSrc: oops,
    header: "Oops",
    text: "Explore the astonishing role of coincidence in the universe, from everyday quirks to the ultimate fluke—the Big Bang.",
    link: "/",
    imgAlt: "Oops",
  },

  {
    imgSrc: safari,
    header: "Expedition to Africa",
    text: "A 1948 Danish expedition to Africa collected animals for museum taxidermy—revealing a complex legacy of science.",
    link: "/",
    imgAlt: "Expedition to Africa",
  },

  {
    imgSrc: global,
    header: "The Global Backyard",
    text: "Discover the planet’s wildlife through taxidermy—from local creatures to exotic species.",
    link: "/",
    imgAlt: "The Global Backyard",
  },

  {
    imgSrc: nature,
    header: "Our Nature",
    text: "Explore Denmark’s wild side—its landscapes, animals, and ecosystems—in this celebration of the nature that surrounds us.",
    link: "/",
    imgAlt: "Our Nature",
  },
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
      if (
        scrollElement.scrollLeft + scrollElement.clientWidth >=
        scrollElement.scrollWidth - 2
      ) {
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
      if (scrollElement)
        scrollElement.removeEventListener("scroll", handleScroll);
      if (prevBtn) prevBtn.removeEventListener("click", handlePrev);
      if (nextBtn) nextBtn.removeEventListener("click", handleNext);
    };
  }, []);

  return (
    <div className="page__content__block">
      <div className="horizontal-scroll horizontal-scroll--snap">
        <div className="horizontal-scroll__header">
          <div className="horizontal-scroll__header__content">
            <h2 className="horizontal-scroll__header__content__title">
              Our Exhibitions
            </h2>
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
          <ul
            className="cards-container cards-container--row"
            style={{ display: "flex" }}
          >
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
