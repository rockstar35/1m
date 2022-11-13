import LandingDog from '../../../assets/images/landing-dog.jpg';
const AdSection = () => {
    return (
        <div className='relative flex items-center'>
            <div className='text-white absolute content-center text-left pl-24 w-100'>
                <div>
                    <div className='lg:block sm:hidden md:hidden hidden'>
                        <div className='text-base'>If you wannt a Quality,</div>
                        <div className='text-3xl font-medium'>Miniture Australian Shepherds,</div>
                        <div className='text-base'>then we might be what you are looking for.</div>
                    </div>
                </div>
            </div>
            <img src={LandingDog} className='w-full' alt="" />
        </div>
    );
}

export default AdSection;