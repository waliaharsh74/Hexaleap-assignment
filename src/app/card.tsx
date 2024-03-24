import React from 'react';

// Define props type
interface CardProps {
    imgSrc: string;
    time: string;
    name: string;
    location: string;
    collectionName: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, time, name, location, collectionName }) => {
    return (
        <div className="bg-white rounded-lg  overflow-hidden mt-[8px] w-[280px] ">

            <div className='bg-[#F9F8FF]  ' >
                <div className="img-container w-[280px]  p-[20px]  dark:bg-cardDark ">
                    <img
                        className="w-[250px] h-[437px] object-cover"
                        src={imgSrc}
                        alt={name}
                    />
                </div>
                <div className="w-[280px] text-container   dark:bg-cardDark text-center  ">
                    <div className="border-black border-2 border-dashed ml-[2.5px] w-[230px] dark:border-white"></div>
                    <div className=" text-gray-900 mt-[10px] text-[20px] font-[600] dark:text-textDark">{name}</div>

                    <div className="text-sm text-gray-500 mt-1 dark:text-textDark">
                        {time}
                    </div>
                    <div className="text-xs text-gray-700 mt-1 dark:text-textDark">
                        {location}
                    </div>
                    <div className="text-sm font-bold mt-2 bg-[#000] text-[#fff] p-2 dark:text-textDark">{collectionName}</div>
                </div>

            </div>

        </div>
    );
};

export default Card;
