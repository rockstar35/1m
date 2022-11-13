import { Link , useLocation} from 'react-router-dom'

import appRoutes from '../pages/routes'
import { BsSearch } from 'react-icons/bs'
import { BsList } from 'react-icons/bs'
const Header = () => {
  const location = useLocation();
  return (
    <header className="flex justify-between absolute w-full py-6 px-10 z-10">

      <nav className="navbar navbar-expand-lg navbar-light no-underline items-center w-full">

        <div className='flex justify-end items-center sm-input w-full'>
              <BsSearch className='absolute text-red-500 mr-2 font-bold' />
              <input type="text" className='rounded-2xl h-8 search pl-3 w-full' />
            </div>

        <div className='container-fluid'>
          <div className='navbar-brand'>
            <Link to={'/'} className={`no-underline  text-lg font-medium sm:text-2xl ${location.pathname==="/about"||location.pathname==="/contact"?'text-black':'text-white'}`}>
              SHADE TREE RANCH
            </Link>
          </div>
          <div className='navbar-toggler pb-4 border-0 mr-2' data-bs-toggle="collapse" data-bs-target='#mynavbarAltMarkup'>
            <BsList className={`absolute ${location.pathname==="/about"||location.pathname==="/contact"?'text-black':'text-white'} text-2xl mr-2 font-bold`} />
          </div>
          <div className='collapse navbar-collapse' id="mynavbarAltMarkup">
            <ul className='navbar-nav'>
              {appRoutes.map(
                (item, index) =>
                  <li key={index} className="flex pl-3 justify-start bg-item">
                    <Link to={item.path} key={item.title} className={`nav-link no-underline ${location.pathname==="/about"||location.pathname==="/contact"?' white-color':'text-white'} mr-5 hover:underline`}>
                      <div  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">{item.title}</div>
                    </Link>
                  </li>
              )}
            </ul>
            <div className='relative flex justify-end items-center header-input'>
              <BsSearch className='absolute text-red-500 mr-2 font-bold' />
              <input type="text" className='rounded-2xl search h-8 pl-3' />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
