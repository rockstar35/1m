import Detail from '../components/detail';
import { DogType } from '../../../interfaces/interface'

interface IPropsDog {
    pets: Array<DogType>
}

const DogList2 = (props: IPropsDog) => {
    return (
        <div className='flex flex-wrap p-8 lg:mr-40 lg:ml-40'>
            <div className="m-list">
                {props.pets.map((pet:DogType, index:number) => {
                        return <div key={index} className='flex justify-center col-lg-6 col-sm-12 mb-2 mt-2'>
                            <Detail pet={pet} />
                        </div>
                    }
                )}
            </div>
        </div>
    );
}

export default DogList2;