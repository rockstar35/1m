import AdSection from "./sections/AdSection";
import Description from "./sections/Description";
import Shepherd from "./sections/Shepherd";
import Footer from '../../layouts/Footer';

const Landing = () => {
  return (
    <div className="">
      <AdSection />
      <Description />
      <Shepherd />
      <Footer />
    </div>
  );
}

export default Landing;