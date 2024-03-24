// pages/index.tsx

import React from 'react';

const IndexPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <Body />
        </div>
    );
};

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center w-full bg-gray-200 p-4">
            <h1 className="text-2xl">Sports</h1>
            <div className="text-sm">Ad</div>
        </header>
    );
};

const Body: React.FC = () => {
    return (
        <div className="w-800px m-4 p-4 border border-gray-300">
            <Advertisement />
            <div className="text-center mb-4">
                <p>See More</p>
            </div>
        </div>
    );
};

const Advertisement: React.FC = () => {
    return (
        <div className="text-center mb-4">
            <h2 className="text-xl mb-2">EVERY SEASON STARTS AT</h2>
            <h3 className="text-lg mb-2">DICK'S SPORTING GOODS</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    );
};

interface TeamProps {
    teamName: string;
    sport: string;
    events: string;
}

const Team: React.FC<TeamProps> = ({ teamName, sport, events }) => {
    return (
        <div className="team">
            <h3>{teamName}</h3>
            <p>{sport}</p>
            <p>{events} Events</p>
        </div>
    );
};

export default IndexPage;
