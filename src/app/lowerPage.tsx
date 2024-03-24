import React from 'react'
import Card from "./card"
import { collections } from "../../Data/mockdata";

function LowerPage() {
    return (
        <div className='lowerbg'>
            <h1 className="text-[40px] mx-[34%] font-[700] dark:text-textDark">Collection Spotlight</h1>
            <p className="mx-[20%] text-center font-[400] dark:text-textDark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, aut</p>
            <div className="flex pl-[10px] pr-[10px] bg-[#F7F7F8] lowerbg  ">

                <button className="w-[20px] text-[80px] text-[#2C9CF0] ">{'<'}</button>
                {collections.map((collection, index) => (
                    <Card
                        key={index}
                        name={collection.name}
                        time={collection.time}
                        location={collection.location}
                        collectionName={collection.collectionName}
                        imgSrc={collection.imgSrc}

                    />
                ))}
                <button className="text-[80px] text-[#2C9CF0]">{'>'}</button>
            </div>
        </div>
    )
}

export default LowerPage