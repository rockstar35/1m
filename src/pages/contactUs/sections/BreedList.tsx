import Dog1 from '../../../assets/images/1.png'
import Dog2 from '../../../assets/images/2.png'
import Dog3 from '../../../assets/images/3.png'
import Dog4 from '../../../assets/images/4.png'
const DogList = () => {
    return (
        <div className='p-5'>
            <div className='sm:flex justify-around pt-5'>
                <div className='basis-2/4 sm:pl-20'>
                    <div className="text-[#FF4200] font-bold text-2xl pb-3 pt-2">DISCOVER US</div>
                    <div>
                        Pet care is here to help you;<br />
                        Our experts are available to answer any questions you might have. We’ve got the answers.
                    </div>
                    <div className="text-[#FF4200] font-bold text-2xl pb-3 pt-2">Visit Us</div>
                    <div>Canada, toronto, ottawa - 123</div>
                    <div>Feel free to get in touch with us through our Website: </div>
                    <div className="text-[#FF4200] font-bold text-2xl pb-3 pt-2">Email US</div>
                    <div>petcare@gmail.com</div>
                    <div className="text-[#FF4200] font-bold text-2xl pb-3 pt-2">CALL US</div>
                    <div>
                        +1 1234567890 <br />
                        +1 0987654321
                    </div>
                </div>
                <div className='basis-2/4 py-3 relative'>
                    <img src={Dog1} alt='dog1' className='w-1/4 max-w-[300px] absolute ml-[50%] mt-[10%]  drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]' />
                    <img src={Dog2} alt='dog2' className='w-1/4 max-w-[300px] absolute ml-[20%]  drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]' />
                    <img src={Dog3} alt='dog3' className='w-1/4 max-w-[300px] absolute ml-[10%] mt-[20%]  drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]' />
                    <img src={Dog4} alt='dog4' className='w-1/4 max-w-[300px] absolute ml-[40%] mt-[30%]  drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]' />
                </div>
            </div>
            <div className='sm:flex justify-around pt-4 mt-[150px] sm:mt-[0px] xl:mt-[20px] 2xl:mt-[150px]'>
                <div className='basis-2/4 sm:pl-20'>
                    <div className="text-black font-bold text-2xl pb-3 pt-2">Have a plan for adopt? Let’s discuss</div>
                    <div>
                        Thank you for getting in touch!<br />
                        Kindly. <br />
                        Fill the form, have a great day!
                    </div>
                </div>
                <div className='basis-2/4 py-3 sm:px-10 relative'>
                    <input type="text" placeholder='Your Name' className='w-full mb-3 search pl-2 h-8 rounded'/>
                    <input type="text" placeholder='Your Email' className='w-full mb-3 search pl-2 h-8 rounded' />
                    <input type="text" placeholder='Phone Number'  className='w-full mb-3 search pl-2 h-8 rounded'/>
                    <textarea placeholder='Message' className='w-full mb-3 search pl-2 h-20 rounded' />
                    <div className='flex justify-start mt-2'>
                        <button className='border-2 rounded p-1 px-2 border-slate-500 hover:border-slate-900'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DogList;