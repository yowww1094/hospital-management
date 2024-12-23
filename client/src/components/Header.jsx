import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import classNames from 'classnames';




function Header() {
  const [ toggleSearch, setToggleSearch ] = useState(false);

  return (


    // <div className='h-[50px] bg-white flex flex-row justify-between border-b items-center border-neutral-200 pb-1 px-10'>
    //   <div className='flex flex-row mx-5'>
    //     <form action="" className='flex flex-row w-[400px] h-8 border rounded-lg border-neutral-400 items-center justify-between'>
    //       <input className='text-neutral-500 rounded-lg border-none text-sm w-full h-full px-5' placeholder='Search' type="text" />
    //       <button type='submit' className='text-lg border-l border-neutral-400 px-2 cursor-pointer'><IoIosSearch/></button>
    //     </form> 
    //   </div>
    //   <div className='flex flex-row gap-2.5'>
    //     <span className='text-xl cursor-pointer'><FaRegBell /></span>
    //     <span className='text-xl cursor-pointer'><FaRegUserCircle /></span>
    //   </div>
    // </div>

    <div className='px-6 py-2 flex gap-4 items-center bg-gray-50 shadow-md shadow-black/5'>
      <span className='text-2xl text-gray-600 cursor-pointer'><IoMenu /></span>
      <div className='flex items-center'>
        <Link to='/' className='text-gray-600 text-sm mr-1'>Dashboard</Link>
        <span className='text-gray-600 text-sm mr-1'>/</span>
        <span className='text-gray-500 text-sm'>Analytics</span>
      </div>
      <div className='ml-auto flex gap-1 items-center'>
        <div>
          <button className='text-gray-500 text-l h-8 w-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600'><FaRegBell /></button>
        </div>

        <div>
          <button onClick={() => setToggleSearch(true)} className='text-gray-500 text-xl h-8 w-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600'><IoIosSearch /></button>
          {/* <div className={classNames('absolute max-w-xs w-full bg-white rounded-md border border-gray-100 ml-auto flex items-center', 
            toggleSearch == true ? '' : 'invisible'
          )}>
            <form action="" className='p-4'>
              <div className="relative w-full">
                <input type="text" className='pr-4 pl-10 py-2 bg-gray-100 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500' placeholder='Search...'/>
                <button type='submit' className='absolute top-1/2 left-1.5 -translate-y-1/2 text-gray-400 h-8 w-8 rounded flex items-center justify-center hover:text-gray-600'><IoIosSearch /></button>
              </div>
            </form>
            <button onClick={() => setToggleSearch(false)} className=' text-black h-8 w-8 rounded flex items-center justify-center hover:text-gray-600'><IoCloseSharp /></button>
          </div> */}
        </div>

        <div className='py-2 px-4 flex items-center'>
          <img src="https://placehold.co/32x32" alt="Logo" className='w-7 h-7 rounded block object-cover align-middle' />
          
        </div>
      </div>
      
    </div>
  )
}

export default Header