// components/TeamCard.tsx

import React from 'react';
import Image from 'next/image'

interface TeamCardProps {
    teamName: string;
    sport: string;
    events: number;
    imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ teamName, sport, events, imageSrc }) => {
    return (
        <div className="team-card  p-2 border-[#FFFFFF] dark:bg-cardDark shadow-lg m-1">
            <Image width={500}
                height={500} src={imageSrc} alt={teamName} className="team-image" />
            <h3 className='ml-2 font-[600] dark:text-textDark'>{teamName}</h3>
            <div className='flex bg-[#F7F7F8] dark:bg-[#292B32] m-[2px] p-[3px]'>

                <div className='ml-1 '>
                    <div className='text-sm w-[6rem] dark:text-textDark '>Total events</div>
                    <div className='text-sm font-[600] dark:text-textDark'>{events} </div>

                </div>

                <div>
                    <div className='text-sm dark:text-textDark'>Sports</div>
                    <div className='text-sm w-[6rem] font-[600] dark:text-textDark'>{sport}</div>
                </div>
            </div>


        </div>
    );
};

export default TeamCard;

