import Dog1 from '../../../assets/images/dog1.jpg'
import Dog2 from '../../../assets/images/dog2.jpg'
import Dog3 from '../../../assets/images/dog3.jpg'
import Dog4 from '../../../assets/images/dog4.jpg'
import Dog5 from '../../../assets/images/dog5.jpg'
import Dog6 from '../../../assets/images/dog6.jpg'

const images = [
    Dog1, Dog2, Dog3, Dog4, Dog5, Dog6,
]

const DogList = () => {
    
    return (
        <div className='p-5'>
            <div className='text-center text-3xl text-orange-500 font-bold pt-12 pb-4'>Available Puppies</div>
            <div className='flex  justify-around flex-wrap'>
                {images.map((image, index) => {
                    return <div key={index} className="p-3">
                        <img src={image} alt="dog" className='fixed-image' />
                    </div>
                })}
            </div>
        </div>
    );
}

export default DogList;