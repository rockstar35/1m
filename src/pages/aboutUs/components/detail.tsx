import DogKind from '../../../assets/images/dog_kind.jpg';
const detail = () => {
    return (
        <div className='w-full mr-3 ml-3'>
            <div className='flex justify-center'>
                <img src={DogKind} alt="" />
            </div>
            <div >
                <span className='text-xl text-orange-500 font-bold pr-2'>
                    BALTO
                </span>
                <span className='text-1xl font-bold '>
                    MALE
                </span>
                <div className='text-base'>
                     Balto is a gentle blue-eyed blue merle with red factoring, standing 17inches. He has consistently created a beautiful mix of puppies. Most with his deep blue eyes
                </div>
            </div>
        </div>
    );
}

export default detail;