import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import {DASHBOARD_SIDEBAR_LINKS} from '../lib/consts/Navigation';

import { TbLogout } from "react-icons/tb";

const linkClasses = 'flex items-center py-3 px-4 text-gray-300 rounded-md hover:bg-gray-950 hover:text-gray-100'

function Sidebar() {
  return (
    
    <div className='flex flex-col fixed top-0 left-0 w-64 h-full bg-gray-900 p-4 overflow-hidden'>
      <div className='flex items-center pb-4 border-b border-b-gray-500'>
        <img src="https://placehold.co/32x32" alt="Logo" className='w-8 h-8 rounded object-cover' />
        <span className='text-lg font-bold text-white ml-3'>Logo</span>
      </div>

      <div className='my-6 flex-1 flex-col gap-3'>
        {
          DASHBOARD_SIDEBAR_LINKS.map(item => (
            <SideBarLink key={item.key} item={item} />
          ))
        }
      </div>

      <div className='border-t border-t-gray-500 pt-4'>
        <div className={classNames(linkClasses)}>
          <span className='mr-3 text-lg text-red-500'><TbLogout /></span>
          <span className='text-sm text-red-500'>Log Out</span>
        </div>
      </div>
    </div>

  )
}

//const linkClasses = 'flex flex-row items-center gap-2 font-light px-3 py-2 hover:bg-neutral-400 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


function SideBarLink({item}) {
  const {pathname } = useLocation();

  return(
    <Link 
        to={item.path}
        className={classNames(
          pathname === item.path ? 'border border-b-gray-400 bg-gray-800' : '',
          linkClasses
        )}
    >
      <span className='mr-3 text-lg'>{item.icon}</span>
      <span className='text-sm'>{item.label}</span>
    </Link>
  )
}

export default Sidebar
