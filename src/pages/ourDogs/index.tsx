import AdSection from "./sections/AdSection";
import Shepherd from "./sections/Shepherd";
import DogList from "./sections/DogList";
import DogList2 from "./sections/DogList2";

import { useAppDispatch, useAppSelector} from '../../redux/hooks';
import { fetchPets, petsAction, selectCount } from "../../redux/pet/petSlice";
import Config from '../../config'
import React from 'react'

const OurDogs = () => {
  const dispatch = useAppDispatch();
  const pets = useAppSelector(state => state.pets.pets)
  const offset = useAppSelector(state => state.pets.offset)
  const totalCount = useAppSelector(state => state.pets.totalCount)
  React.useEffect(()=>{
    dispatch(petsAction.resetOffset())
    dispatch(fetchPets(offset))
    dispatch(petsAction.increaseOffset(Config.limit))
    // eslint-disable-next-line
  },[])

  const getMorePet = () =>{
    dispatch(fetchPets(offset))
    dispatch(petsAction.increaseOffset(Config.limit))
  }
  return (
    <div className="">
      <AdSection />
      <DogList />
      <Shepherd />
      <DogList2 pets={pets} />
      {totalCount> offset && <div className="text-center mb-20">
        <button className="rounded-lg shadow-lg shadow-gray-900 border-black border-2 p-2" onClick={()=>getMorePet()}>EXPLORE MORE</button>
      </div>}
    </div>
  );
}

export default OurDogs;