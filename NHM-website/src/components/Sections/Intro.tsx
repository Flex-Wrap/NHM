import type React from "react";
import safariIntro from "../../assets/safari-intro.jpg";

const Intro: React.FC = () => {
    return (
        <>
        <div 
            className="page__content__block"
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-start",
                columnGap: "10px",
                rowGap: "45px"
            }}
        >
            <img 
                src={safariIntro}
                alt="Exhibition photo"
                style={{width: "581px", height: "300px", objectFit: "cover"}}
            />
            <div style={{maxWidth: "581px"}}>
                <h2 style={{marginTop: "0"}}>Step into the story — be part of it.</h2>
                <p>Download the Naturhistorisk Museum Aarhus app and turn your visit into an adventure. As you explore the exhibits, the app places you right at the heart of the story—inviting you to see the natural world through the eyes of the creatures, people, and forces that shaped it.
                <br></br>
                <br></br>
                Look around, interact, and let the museum speak to you in a whole new way. The app is your guide—but the real experience is all around you.</p>
            </div>
        </div>
        </>
    );
}

export default Intro;