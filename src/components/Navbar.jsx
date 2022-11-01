import React, { useEffect, useState } from 'react';
import Image from "../assets/dosa_icon.png";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill, BsCreditCardFill } from 'react-icons/bs';
import { FaUserFriends,  } from 'react-icons/fa'
import { MdFavorite, MdHelp, MdDirectionsBike } from 'react-icons/md'



const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const resizeHandler = () => {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    }
  }, []);
  return size;
}

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  let searchBar = false;
  const [width] = useWindowSize();
  if (width > 768) {
    searchBar = true;
  }

  const sideBarHandler = () => {
    setSideBar((prevState) => { return !prevState });
  }

  
  return (
    <>
      <nav className='max-w-[1640px] 2xl:mx-auto h-[80px] bg-white shadow-2xl flex justify-between items-center z-10 sticky top-0 left-0 right-0 '>
        <div className='flex items-center h-[100%]'>
          <AiOutlineMenu onClick={sideBarHandler} size={22} className="ml-4 sm:ml-6 cursor-pointer" />
          <div className='w-[200px] sm:w-[300px]  h-[100%]  flex items-center sm:items-start  ml-4 sm:ml-10'>
            <img src={Image} alt="dosa" className='w-[25%] sm:w-[30%] h-[70%] sm:h-[100%]' />
            <h1 className='text-xl sm:text-3xl text-center'><span className='text-3xl sm:text-6xl'>J</span>ust <span className='text-3xl sm:text-6xl'>D</span>osa</h1>
          </div>
        </div>
        {searchBar &&
          <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search foods' />
          </div>
        }
        {/* Cart button */}
        <button className=' text-black flex items-center mr-4  py-2 px-2 rounded-full'>
          <BsFillCartFill size={20}  /> Cart
        </button>
      </nav>
      {sideBar ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      {sideBar &&
        <aside className='fixed top-0 left-0 z-10 sidebar w-[250px] md:w-[300px] h-screen bg-white'>
          <AiOutlineClose onClick={sideBarHandler} size={25} className='absolute right-4 top-6 cursor-pointer' />
          <h1 className='text-xl p-4'><span className='text-3xl'>J</span>ust <span className='text-3xl'>D</span>osa</h1>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'><MdDirectionsBike size={25} className='mr-4 text-blue-500' /> Orders</li>
            <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4 text-blue-500' /> Favorites</li>
            <li className='text-xl py-4 flex'><BsCreditCardFill size={25} className='mr-4 text-blue-500' /> Saved Cards</li>
            <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4 text-blue-500' /> Invite Friends</li>
            <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4 text-blue-500' /> Help</li>
          </ul>
        </aside>
      }
    </>
  )
}

export default Navbar