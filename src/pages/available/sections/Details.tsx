import Detail from '../components/detail';
const Description = () => {
    return (
        <div className='flex flex-wrap p-8 flex lg:mr-40 lg:ml-40'>
            <div className='flex justify-center col-lg-6 col-sm-12 mb-2 mt-2'>
                <Detail />
            </div>
            <div className='flex justify-center col-lg-6 col-sm-12 mb-2 mt-2'>
                <Detail />
            </div>
        </div>
    );
}

export default Description;