import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='flex justify-between items-center max-w-4xl mx-auto py-10 gap-10'>
            <div className=''>
                <h2>Bonjour</h2>
                <p>
                Make sure your compiled CSS is included in the head your framework might handle this for you, then start using Tailwind’s utility classes to style your content.
                </p>
                <div className='w-30 pt-4'>
                    <Link to="/">
                        <p className=' bg-amber-500 hover:bg-amber-600 py-2 px-4 rounded text-gray-50 '>Shopping</p>
                    </Link>
                </div>
            </div>
            <div className='w-200'>
                <img src='https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg' alt className='rounded shadow-sm'/>
            </div>
        </div>
    )
}

export default Banner
