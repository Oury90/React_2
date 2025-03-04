import React, { useState } from 'react'
import FormPost from '../pages/FormPost'



const Posts = () => {
    // useEffect(() =>{
    //         fetch("blog.json")
    //         .then(res => res.json())
    //         .then(datas => setAllDatas(datas))
    //     })
    return (
        <div>
        <FormPost fechingData={allDatas}/>
        </div>
    )
}

export default Posts
