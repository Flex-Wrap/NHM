import headphones from "../assets/headphones-black.svg";
import compass from "../assets/compass.svg"; 
import mockup1 from "../assets/mockup1.png";   
import mockup2 from "../assets/mockup2.png";
import StoryDescriptionCard from "../Cards/StoryDescriptionCard";
import Quote from "../Cards/Quote";

const StoryDescription: React.FC = () => {
    const descriptionSections = [
        {
            imgSrc: mockup1,
            iconSrc: headphones,
            iconAlt: "Headphones Icon",
            header: "Put on your headphones. You’re not just walking through an exhibit — you’re stepping into a living memory.",
            text: [
                "The sun blazes overhead, dust swirling around your boots. You raise your camera, capturing the wildlife around you—but something feels different this time.",
                "Voices whisper nearby — a quiet tension between companions, a clash of views on what this expedition means.",
                "You begin to sense something deeper — the fragile bond between humans and the creatures you observe, how alike you really are in the struggle to survive, to belong.",
                "Questions arise. What are the costs of bringing the wild into captivity? And who truly pays the price?"
            ],
            imgAlt: "App Mockup",
            reverse: false
        },
        {
            imgSrc: mockup2,
            iconSrc: compass,
            iconAlt: "Compass Icon",
            header: "This is more than just a story about animals or adventure",
            text: [
                "It’s a journey that challenges what you thought you knew about yourself, the delicate balance of nature, and the deep, often surprising connections that bind all living things in this wild world around you."
            ],
            imgAlt: "App Mockup",
            reverse: true
        }
    ]

  return (
    <>
      <div className="page__content__block">
        <h2 className="header__content__title" style={{ marginBottom: "45px" }}>
          Unfold the story: The 1948 African Expedition
        </h2>
        <StoryDescriptionCard {...descriptionSections[0]} />
        <Quote />
        <StoryDescriptionCard {...descriptionSections[1]} />
      </div>
    </>
  );
};

export default StoryDescription;
