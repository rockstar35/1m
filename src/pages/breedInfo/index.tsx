import AdSection from "./sections/AdSection";
import BreedList from "./sections/BreedList";
import Footer from '../../layouts/Footer';
import { BreedInfoType } from "../../interfaces/interface"
import Dog1 from '../../assets/images/breedInfo.jpg';
import Dog2 from '../../assets/images/breedInfo.jpg';
import Dog3 from '../../assets/images/breedInfo.jpg';
import Dog4 from '../../assets/images/breedInfo.jpg';
const breedList: Array<BreedInfoType> = [
  {
    image: Dog1,
    title: 'Golden Retriever',
    description:'The Golden Retriever is a larger-sized breed of dog breed as gun dogs to retreive shot waterfowl, such as ducks and pland game birds, during hunting and shooting parties, and where names “retreiver”because of their ability to retrieve shot game undamaged'
  },
  {
    image: Dog2,
    title: 'Golden Retriever',
    description:'The Golden Retriever is a larger-sized breed of dog breed as gun dogs to retreive shot waterfowl, such as ducks and pland game birds, during hunting and shooting parties, and where names “retreiver”because of their ability to retrieve shot game undamaged'
  },
  {
    image: Dog3,
    title: 'Golden Retriever',
    description:'The Golden Retriever is a larger-sized breed of dog breed as gun dogs to retreive shot waterfowl, such as ducks and pland game birds, during hunting and shooting parties, and where names “retreiver”because of their ability to retrieve shot game undamaged'
  },
  {
    image: Dog4,
    title: 'Golden Retriever',
    description:'The Golden Retriever is a larger-sized breed of dog breed as gun dogs to retreive shot waterfowl, such as ducks and pland game birds, during hunting and shooting parties, and where names “retreiver”because of their ability to retrieve shot game undamaged'
  },
]
const BreedInfo = () => {
  return (
    <div className="">
      <AdSection />
      <BreedList data={breedList}/>
      <Footer />
    </div>
  );
}

export default BreedInfo;