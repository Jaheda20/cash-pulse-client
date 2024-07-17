import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import MenuItems from "./MenuItems";
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { AuthContext } from "../../../Provider/AuthProvider";


const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const {logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const handleLogout = () =>{
    logOut()
    navigate ('/')
  }


  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                src={logo}
                alt='logo'
                width='60'
                height='60'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          {/* <AiOutlineBars className='h-5 w-5' /> */}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-100 w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2  justify-center items-center shadow-md rounded-lg  mx-auto'>
              <Link to='/' className="flex items-center gap-2">
                <img
                  src={logo}
                  alt='logo'

                  className='rounded-full bg-slate-100 p-1 w-14 h-14 '
                />
                <p className='text-2xl font-semibold text-slate-900'>Cash Pulse</p>
              </Link>
            </div>
          </div>


          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              

              {/* {role === 'Admin' && <AdminMenu></AdminMenu> }
              {role === 'Agent' && <AgentMenu></AgentMenu>}
              {role === 'user' && <UserMenu></UserMenu>}  */}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <MenuItems
            label='Profile'
            address='/dashboard'
            icon={FaUser}
          />
          <button
          onClick={()=>handleLogout(logOut)}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-green-400   hover:text-gray-600 transition-colors duration-300 transform'
          >
            <MdLogout className='w-5 h-5 text-slate-700' />

            <span className='mx-4 text-slate-700 font-medium'>Logout</span>
          </button>

          
        </div>
      </div>
    </>
  )
}

export default Sidebar