import AdSection from "./sections/AdSection";
import Details from "./sections/Details";
import Footer from "./sections/Footer";
import DogList from "./sections/DogList";
import { useAppDispatch, useAppSelector} from '../../redux/hooks';
import { fetchPets } from "../../redux/pet/petSlice";
import React from 'react'

const AvailablePuppies = () => {
  const dispatch = useAppDispatch();
  const pets = useAppSelector(state => state.pets.pets)
  const offset = useAppSelector(state => state.pets.offset)
  React.useEffect(()=>{
    dispatch(fetchPets(offset))
  },[])
  return (
    <div className="">
      <AdSection />
      <DogList />
      <Details />
      <Footer/>
    </div>
  );
}

export default AvailablePuppies;