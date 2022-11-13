import { BreedInfoType } from '../../../interfaces/interface'

interface IPropsBreedInfo {
    data: Array<BreedInfoType>
}
const DogList = (props: IPropsBreedInfo) => {
    return (
        <div className='p-5'>
            <div className='flex  justify-around flex-wrap'>
                {props.data.map((item, index) => {
                    return <div key={index} className="p-3 sm:flex flex-row">
                        {index%2!==0&&<div className='basis-2/4 p-4 hidden sm:block'>
                            <img src={item.image} alt="dog" className='rounded-lg drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]' />
                        </div>}
                        <div className='basis-2/4 p-4 block sm:hidden'>
                            <img src={item.image} alt="dog" className='rounded-lg drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]' />
                        </div>
                        <div className='basis-2/4 p-4'>
                            <div className='text-2xl sm:text-4xl text-[#FF4200] font-bold pb-3'>
                                {item.title}
                            </div>
                            <div className='text-base sm:text-lg'>
                                {item.description}
                            </div>
                        </div>
                        {index%2===0&&<div className='basis-2/4 p-4 hidden sm:block'>
                            <img src={item.image} alt="dog" className='w-full rounded-lg drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]' />
                        </div>}
                    </div>
                })}
            </div>
        </div>
    );
}

export default DogList;