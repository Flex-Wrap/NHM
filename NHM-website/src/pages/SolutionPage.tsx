import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Features from '../components/Features';
import StoryDescription from '../components/StoryDescription';
import AppInfo from '../components/AppInfo';
import Download from '../components/Download';
import hero from "../assets/hero2.png";

const SolutionPage: React.FC = () => {
    return (
    <>
    <Hero 
        imgSrc={hero}
        imgAlt="App Mockup"
        title={<><span>Expedition to </span><strong>Africa</strong></>}
        description="Look around and dive deeper into nature!"
        buttonText="Download App Now"       
    />
    <div className="page__content">
        <Intro />
        <Features />
        <StoryDescription />
        <AppInfo />
        <Download />
    </div>
    </>
    );
};

export default SolutionPage;