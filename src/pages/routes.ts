import Landing from './landing';
import BreedInfo from './breedInfo';
import ContactUs from './contactUs';
import AboutUs from './aboutUs';
import AvailablePuppies from './available';
import OurDogs from './ourDogs';
type route = {
    path:string,
    title:string,
    description:string,
    requireLogin:boolean,
    Page:Function,
}
const appRoutes:Array<route> = [
    {
        path: '/',
        title: 'Home',
        description: 'Home',
        requireLogin: true,
        Page: Landing,
    },
    {
        path: '/about',
        title: 'About Us',
        description: 'About Us',
        requireLogin: true,
        Page: AboutUs,
    },
    {
        path: '/dogs',
        title: 'Our Dogs',
        description: 'Our Dogs',
        requireLogin: true,
        Page: OurDogs,
    },
    {
        path: '/available',
        title: 'Available Puppies',
        description: 'Available Puppies',
        requireLogin: true,
        Page: AvailablePuppies,
    },
    {
        path: '/breed',
        title: 'Breed Info',
        description: 'Breed Info',
        requireLogin: true,
        Page: BreedInfo,
    }, 
    {
        path: '/contact',
        title: 'Contact Us',
        description: 'Contact Us',
        requireLogin: true,
        Page: ContactUs,
    },
];
export default appRoutes;