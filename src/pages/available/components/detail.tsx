import DogKind from '../../../assets/images/dog_kind.jpg';
const detail = () => {
    const sendEmail = (e: React.SyntheticEvent<EventTarget>)=>{
        e.preventDefault();
    }
    return (
        <div className='w-4/5'>
            <div className='flex justify-center'>
                <img src={DogKind} alt="" />
            </div>
            <div >
                <span className='text-xl text-orange-500 font-bold pr-2'>
                    JASMIN
                </span>
                <span className='text-1xl font-bold '>
                    FREMALE BORN 3/3/2022
                </span>
                <div className='text-base'>
                    She is a beautiful black tri with blue-eyes. She love to chew and lick whatever fits in her mouth.
                </div>
                <div className='font-bold '>
                    PICKUP DATE: 5/2/2022
                </div>
                <div className='text-orange-500 font-bold pr-2'>
                    MOM IS ZAYDA & DAD IS BALTO
                </div>
            </div>
            <div className='flex'>
                <div className='w-full mr-2'>
                    <div className='w-full text-white rounded-lg shadow-lg shadow-gray-900 bg-orange-500 h-12 mr-3 mb-3 flex items-center justify-center' onClick={(e)=>sendEmail(e)}>
                        <div className='text-center'>
                            <div>
                                RESERVE AS PET
                            </div>
                            <div>
                                $800
                            </div>
                        </div>
                    </div>
                    <div className='w-full text-white rounded-lg shadow-lg shadow-gray-900 bg-orange-500 h-12 mr-3 mb-3 flex items-center justify-center'>
                        <div className='text-center'>
                            <div className='hidden sm:block'>
                                RESERVE WITH BREEDING
                            </div>
                            <div>
                                RIGHTS $1200
                            </div>
                        </div>
                    </div>
                    <div className='w-full text-white rounded-lg shadow-lg shadow-gray-900 bg-gray-500 h-12 mr-3 flex items-center justify-center'>
                        <div>
                            ASK A QUESTION
                        </div>
                    </div>
                </div>
                <div className='w-full bg-dark'>

                </div>
            </div>
        </div>
    );
}

export default detail;