import LandingDog from '../../../assets/images/breedInfo.jpg';
const AdSection = () => {
    return (
        <div className='relative flex items-center '>
            <div className='text-white absolute content-center text-left pl-24 w-100 pt-0'>
                <div>
                    <div className='lg:block sm:hidden md:hidden hidden'>
                        <div className='lg:text-6xl sm:text-3xl font-mediump font-bold pt-3 pb-3'>Take Care of your smart dogs </div>
                        {/* <div className='lg:text-1xl pt-1'>All of our dogs are like family and have contact with our family to include our cats. </div>
                        <div className='lg:text-1xl pt-1'>Our breeders are registered and genetically tested fully clear of negative medical markers.  <span className='text-2xl'>WhatsApp</span> or <span className='text-2xl'>Messenger</span> </div>
                        <div className='lg:text-1xl pt-1'>Meaning all pups can safely be sold as pet only or with full rights.</div> */}
                    </div>
                </div>
            </div>
            <img src={LandingDog} className='w-full' alt="" />

        </div>
    );
}

export default AdSection;