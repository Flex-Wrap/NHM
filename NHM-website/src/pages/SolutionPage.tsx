import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Features from '../components/Features';
import StoryDescription from '../components/StoryDescription';
import AppInfo from '../components/AppInfo';
import Download from '../components/Download';

const SolutionPage: React.FC = () => {
    return (
    <>
    <Hero />
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