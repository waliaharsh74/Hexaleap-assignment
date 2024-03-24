import Image from 'next/image'
const Advertisement: React.FC = () => {
    return (
        <div className="  w-1 p-2 m-1 shadow-md  bg-[#fff] dark:bg-cardDark">
            <div className="relative ">
                <div className="absolute bg-black text-white px-4 py-1 top-0 right-0 ">Ad</div>
                <Image src="/dicken.png" width={500} height={300} alt='ad' />

            </div>

            <h1 className='pl-[9px] pr-[4px] font-[600] text-[20px] mt-2 mb-2 dark:text-textDark'>Advertisement title </h1>
            <p className="text-sm  pl-[9px] dark:text-textDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ipsum dolorum temporibus, est minus exercitationem fugit beatae impedit quae eaque unde saepe corporis. Dicta nesciunt sequi culpa ex deserunt fuga officiis! Placeat, saepe? Enim, rem quasi

            </p>
        </div>
    );
};
export default Advertisement