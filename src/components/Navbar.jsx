import React, { useState } from 'react'
import pic from"../../public/photo.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll"
const Navbar = () => {
  const [menu,setnemu]=useState(false)
  const navItems=[
    {
      id:1,
      text:'Home'

    },
    {
      id:2,
      text:'About'

    },
    {
      id:3,
      text:'Projects'

    },
    {
      id:4,
      text:'Experience'

    },
    {
      id:5,
      text:'Contact'

    }

  ]
  return (
    <>
  <div className="max-w-screen-2xl container max-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
    <div className='flex justify-between items-center h-16'>
      <div className='flex space-x-2'>
        <img src={pic} alt="" className='h-12 w-12 '/>
        <h1 className='font-semibold'>Narayan <span className='text-green-500'>Deshpande</span>
        <p className='text-sm'>Web Developer</p>
        </h1>
       
      </div>
{/* desktop nav bar */}
      <div className=''>
        <ul className='hidden md:flex space-x-8'>
  {
    navItems.map(({id,text})=>(
      <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
        <Link to={text}
        smooth={true}
        duration={500}
        offset={-70}
        activeClass='active'
        > {text}</Link>
        
       </li>
    ))
  }
        </ul>
        <div className="md:hidden " onClick={()=>setnemu(!menu)}>

        {menu?<IoCloseSharp />:<AiOutlineMenu />}
        </div>
      </div>

{/* mobile nav bar */}
    </div>
    {
      menu&&(
        <div className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center'>
        {
    navItems.map(({id,text})=>(
      <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>     <Link to={text}
      smooth={true}
      duration={500}
      offset={-70}
      activeClass='active'
      > {text}</Link></li>
    ))
  }
            </ul>
            </div>
      )
    }

    <div>

    </div>
  </div>
    </>
  )
}

export default Navbar
