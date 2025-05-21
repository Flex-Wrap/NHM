import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Features from '../components/Features';

const SolutionPage: React.FC = () => {
    return (
    <>
    <Hero />
    <div className="page__content">
        <Intro />
        <Features />
    </div>
    </>
    );
};

export default SolutionPage;