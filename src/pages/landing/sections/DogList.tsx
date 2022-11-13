import { DogType } from '../../../interfaces/interface'

interface IPropsDog {
    pets: Array<DogType>
}
const DogList = (props: IPropsDog) => {
    return (
        <div className='p-5'>
            <div className='text-center text-3xl text-orange-500 font-medium'>Dream Dog</div>
            <div className='flex  justify-around flex-wrap'>
                {props.pets.map((pet, index) => {
                    return <div key={index} className="p-3">
                        <img src={pet.breederPhoto} alt="dog" className='fixed-image' />
                        <div className='flex justify-center'>
                            <div className='text-white bg-orange-500 w-28 h-8 mt-3 flex items-center justify-center'>${pet.breederGender}</div>
                        </div>

                    </div>
                })}
            </div>
            <div className='flex justify-center mt-4'>
                <button className='border-2 rounded p-1 px-2 border-slate-500 hover:border-slate-900'>EXPLORE MORE</button>
            </div>
        </div>
    );
}

export default DogList;