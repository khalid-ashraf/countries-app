import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <header className='w-full px-8  shadow-sm'>
      <div className='container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl'>
        <div className='flex flex-col md:flex-row items-center'>
          <NavLink to='/' className='flex items-center mb-5 md:mb-0'>
            <span className='text-xl font-black select-none'>
              ASIA <span className='text-indigo-600'>Explorer</span>
            </span>
          </NavLink>

          <nav className='flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8'>
            <NavLink
              to='/'
              end
              className={({ isActive, isPending }) =>
                `mr-5 font-medium hover:text-gray-300 ${
                  isActive ? "text-gray-200" : "text-gray-400"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to='/countries'
              className={({ isActive }) =>
                `mr-5 font-medium hover:text-gray-300 ${
                  isActive ? "text-gray-200" : "text-gray-400"
                }`
              }
            >
              Countries
            </NavLink>

            <NavLink
              to='/about'
              className={({ isActive }) =>
                `mr-5 font-medium hover:text-gray-300 ${
                  isActive ? "text-gray-200" : "text-gray-400"
                }`
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
