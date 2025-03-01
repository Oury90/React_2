import React, { useEffect, useState } from 'react'
import Banner from '../pages/Banner'
import Search from '../pages/Search'

const Home = () => {
    const [datas, setDatas] = useState([])

    useEffect(() =>{
        fetch("blog.json")
        .then(res => res.json())
        .then(datas => setDatas(datas))
    },[])

    return (
        <div className='max-w-4xl mx-auto'>
            <Banner/>
            <Search allDatas={datas}/>
        </div>
    )
}

export default Home
