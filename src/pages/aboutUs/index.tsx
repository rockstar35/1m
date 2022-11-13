import DogList from "./sections/DogList";
import Description from "./sections/Description";
import Footer from '../../layouts/Footer';

const AboutUs = () => {

  return (
    <div className="pt-5">
      <DogList />
      <Description />
      <Footer />
    </div>
  );
}

export default AboutUs;