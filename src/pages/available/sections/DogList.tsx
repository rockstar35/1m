import Dog1 from '../../../assets/images/dog1.jpg'
import Dog2 from '../../../assets/images/dog2.jpg'
import Dog3 from '../../../assets/images/dog3.jpg'
const images = [Dog1, Dog2, Dog3]

const DogList = () => {
    return (
        <div className='p-5 bg-black'>
            {/* <div className='text-center text-3xl text-orange-500 font-medium'>Dream Dog</div> */}
            <div className='flex  justify-around flex-wrap'>
                {images.map((image, index) => {
                    return <div key={index}  className="p-3">
                        <img src={image} alt="dog" className='fixed-image' />
                    </div>
                })}
            </div>
            <div className='flex justify-center mt-4'>
            <div className='text-xl w-3/4 text-center text-light'>Prices are no-negociable and there is a <span className='text-2xl text-orange-500'>$300</span> fee to complete a reservation. To make a reservation simply click the reservation button below the puppy you desire.</div>
            </div>
        </div>
    );
}

export default DogList;