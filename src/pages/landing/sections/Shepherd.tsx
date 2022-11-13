import DogJump from '../../../assets/images/dog_jump.jpg';
const Shepherd = () => {
    return (
        <div className='relative flex items-center'>
            <div className='absolute text-white w-full'>
                <div className='text-lg sm:text-3xl lg:text-4xl xl:text-5xl'>
                    <div className='text-center font-medium'>We do not bred to win awards.</div>
                    <div className='text-center font-medium'>We breed for the love of the Australian Shepherds</div>
                </div>
            </div>
            <img src={DogJump} className='w-full' alt="" /> 
        </div>
    );
}

export default Shepherd;