import React, { useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { TbUserOff } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { href, Link } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";



const navigations =[
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Post", href: "/post"},
    {name: "Contact", href: "/contact"},
    {name: "LogOut", href: "/logout"}
]

const Header = () => {
    const [user, setUser] = useState(false)
    const currentUser = true;

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
            <div className='flex justify-center items-center gap-2 relative'>
                <button className='cursor-pointer ' onClick={() => setUser(!user)}>
                    {
                        currentUser ? <><FaUserCheck />
                        {
                            user && (
                                <div className='absolute'>
                                    {
                                        navigations.map((navigation) =>(
                                            <ul>
                                                <li key={navigation.name} className=' text-gray-500 hover:text-gray-800'>
                                                    <Link to={navigation.href}>{navigation.name}</Link>
                                                </li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            )
                        }
                        </> : <TbUserOff />
                    }
                </button>
                
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
