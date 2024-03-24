import Image from 'next/image'
const Advertisement: React.FC = () => {
    return (
        <div className="  w-1 p-2 m-1 shadow-md  bg-[#fff] dark:bg-cardDark">
            <Image src="/dicken.png" width={500} height={300} alt='ad' />
            <h1 className='pl-[9px] pr-[4px] text-[20px] text-center dark:text-textDark'>Advertisement title </h1>
            <p className="text-sm  pl-[9px] dark:text-textDark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ipsum dolorum temporibus, est minus exercitationem fugit beatae impedit quae eaque unde saepe corporis. Dicta nesciunt sequi culpa ex deserunt fuga officiis! Placeat, saepe? Enim, rem quasi

            </p>
        </div>
    );
};
export default Advertisement