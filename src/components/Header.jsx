import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { TbUserOff } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";




const Header = () => {
    return (
        <div className="flex justify-between">
            {/* left navigation */}
            <div className='flex items-center gap-2'>
                <RiMenu2Line />
                <div className='flex items-center relative'>
                    <IoIosSearch className='absolute' />
                    <input type='text' placeholder='Search here...' className='bg-gray-300 focus:outline-none rounded'/>
                </div>
            </div>

            {/* right navigation */}
            <div className='flex justify-center items-center gap-2'>
                <TbUserOff />
                <CiHeart />
                <Link className='flex items-center gap-1 bg-amber-500 hover:bg-amber-600 py-1 px-2 rounded text-gray-50 '>
                    <GiShoppingCart />
                    <span>Shop</span>
                </Link>
            </div>
        
        </div>
    )
}

export default Header
