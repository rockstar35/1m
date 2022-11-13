import LandingDog from '../../../assets/images/dog_jump1.jpg';
const AdSection = () => {
    return (
        <div className='relative flex items-center'>
            <div className='text-white absolute content-center text-left pl-24 w-100'>
                <div>
                    <div className='lg:block sm:hidden md:hidden hidden'>
                        <div className='lg:text-6xl sm:text-2xl font-medium'>Available </div>
                        <div className='lg:text-6xl sm:text-2xl font-medium pb-3'>Puppies</div>
                        <div className='text-base'>We understand there are a lot of scammers out there, so please becareful.</div>
                        <div className='text-base'>So for your piece of mind we are happy to schedule a video call on <span className='text-2xl'>WhatsApp</span> or <span className='text-2xl'>Messenger</span> </div>
                        <div className='text-base'>so you can see your new puppy before you buy and know you are buying from real people raising sweet puppies</div>
                    </div>
                </div>
            </div>
            <img src={LandingDog} className='w-full' alt="" />

        </div>
    );
}

export default AdSection;