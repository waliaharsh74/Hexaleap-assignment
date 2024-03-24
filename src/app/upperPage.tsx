import React from 'react'
import TeamCard from "./teamCard";
import Advertisement from "./advertisement";
import { teams } from "../../Data/mockdata";
import ThemeToggle from './ThemeToggle';
function UpperPage() {
    return (
        <div className='dark:bg-[#292B32]'>
            <div className="flex ">

                <div className="ml-4 mb-3 ">

                    <h1 className="text-[34px] font-[800] dark:text-textDark">Sports</h1>
                    <div className="border-[blue] border-2 w-[105px]" ></div>
                </div>
                <div className="mr-4 mt-2">

                    <ThemeToggle />
                </div>
            </div>


            <div className="sport sm:flex w-auto ml-2  ">

                {teams.map((team, index) => (
                    <TeamCard
                        key={index}
                        imageSrc={team.imageSrc}
                        teamName={team.teamName}
                        sport={team.sport}
                        events={team.totalEvents}
                    />
                ))}

                <Advertisement />
            </div>
            <button className="bg-[#2C9CF0] text-[#FFFFFF] p-3 rounded-md my-4 ml-[45%]">See More</button>
        </div>
    )
}

export default UpperPage