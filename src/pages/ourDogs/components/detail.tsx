import DogKind from '../../../assets/images/dog_kind.jpg';
import { DogType } from '../../../interfaces/interface'

interface IPropsPetDetails{
    pet:DogType
}
const detail = (props:IPropsPetDetails) => {
    return (
        <div className='w-full mr-3 ml-3'>
            <div className='flex justify-center'>
                <img src={DogKind} alt="" />
            </div>
            <div >
                <span className='text-xl text-orange-500 font-bold pr-2'>
                    {props.pet.breederName}
                </span>
                <span className='text-1xl font-bold '>
                    {props.pet.breederGender}
                </span>
                <div className='text-base'>
                    {props.pet.breederDesc}
                </div>
            </div>
        </div>
    );
}

export default detail;