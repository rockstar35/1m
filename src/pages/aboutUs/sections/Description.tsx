import Foot1 from '../../../assets/images/foot1.png'
import Foot2 from '../../../assets/images/foot2.png'
import Foot3 from '../../../assets/images/foot3.png'

const Description = () => {
    return (
        <div className='relative p-5 text-center w-full'>
            <div className='text-center text-3xl text-orange-500 font-bold pb-4'>About us</div>
            <img src={Foot1} alt="foot1" className="absolute -ml-8 sm:ml-16" width={30} />
            <img src={Foot3} alt="foot2" className="absolute mt-32 sm:mt-12 -ml-6 sm:ml-20" width={30} />
            <div className='flex justify-end mr-12 sm:mr-48'>
                <img src={Foot2} alt="foot3" className="absolute -mt-12 ml-25" width={30} />
            </div>

            <p className=" sm:px-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <p className="sm:px-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>       
        </div>
    );
}

export default Description;