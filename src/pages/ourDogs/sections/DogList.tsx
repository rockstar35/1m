import Dog1 from '../../../assets/images/dog1.jpg'
import Dog2 from '../../../assets/images/dog2.jpg'
import Dog3 from '../../../assets/images/dog3.jpg'
const images = [Dog1, Dog2, Dog3]
const DogList = () => {
    return (
        <div className='p-5 bg-black'>
            <div className='flex  justify-around flex-wrap'>
                {images.map((image, index) => {
                    return <div key={index}  className="p-3">
                        <img src={image} alt="dog" className='fixed-image' />
                    </div>
                })}
            </div>
            <div className='flex justify-center mt-4'>
            <div className='lg:text-4xl sm:text-2xl w-3/4 text-center text-light'>We have a preference for beautiful blue eyes, so all of our dogs have 1 or 2 blue eyes.</div>
            </div>
        </div>
    );
}

export default DogList;