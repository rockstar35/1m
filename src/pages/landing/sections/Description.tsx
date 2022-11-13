import DogKind from '../../../assets/images/dog_kind.jpg';

const Description = () => {
    return (
        <div className='flex flex-wrap p-8'>
            <div className='lg:p-16 col-lg-6 col-sm-12'>
                <img src={DogKind} className='' alt="" />
            </div>
            <div className='flex items-center col-lg-6 col-sm-12'>
                <div>
                <div className='text-xl text-orange-500 font-bold'>
                    LOREM IPSUM
                </div>
                <div className=''>
                    We here at Shade Three Farms love our pets and animals. We started bredding miniature Asutralian Sheppherds simply because we love the breed and producing pups that are ehalthy, beautiful and playful.<br /><br />
                    We here at Shade Three Farms love our pets and animals. We started bredding miniature Asutralian Sheppherds simply because we love the breed and producing pups that are ehalthy, beautiful and playful.
                </div>
                </div>
            </div>
        </div>
    );
}

export default Description;