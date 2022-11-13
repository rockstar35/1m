import DogJump from '../../../assets/images/dog_kind1.jpg';
const Shepherd = () => {
    return (
        <div className='relative flex items-center'>
            <div className='absolute text-white w-full'>
                <div className=''>
                    <div className='text-center lg:text-6xl sm:text-3xl font-medium'>Below are our beautiful mature dogs</div>
                </div>
            </div>
            <img src={DogJump} className='w-full' alt="" /> 
        </div>
    );
}

export default Shepherd;