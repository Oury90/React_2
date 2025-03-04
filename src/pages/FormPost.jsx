import React, { useEffect, useState } from 'react'


const FormPost = () => {

    const [name, setName] = useState({
        title: "",
        description: "",
        category: ""
    })
    const [items, setItems] = useState([])
    const[posts, setPost] = useState([])

    function handleChange(e){
        // newValue = e.target.value;
        // inputName = e.target.name;
        const {name, value} = e.target;

        setName(prev =>{
            return {
                ...prev,
                [name]: value
            }
        })
        
    }
    function handleClick(e){
        setItems(prevItems => {
            const newItems = [...prevItems, name];
            setPost(prevPosts => [...prevPosts, name]); // Ajoute directement au post
            return newItems;
        });

        // Réinitialiser le formulaire après soumission
        setName({
            title: "",
            description: "",
            category: ""
        });

        e.preventDefault();
    }

    useEffect(() =>{
        fetch("blog.json")
        .then(res => res.json())
        .then(datas => setPost(datas))
    },[])
    posts.push(items)
    return (
        <div className='max-w-4xl mx-auto pt-10 text-center'>
            <h1>Posted form</h1>
            <div className='max-w-6xl max-auto shadow-sm rounded p-4'>
                <form className='flex flex-col gap-y-8' onSubmit={handleClick}>
                    <input type='text' onChange={handleChange} value={name.title} placeholder='Title' name='title' className='focus:outline-none bg-gray-300 rounded p-2'/>
                    <input type='text' onChange={handleChange} value={name.description} placeholder='Description' name='description' className='focus:outline-none bg-gray-300 rounded p-2'/>
                    <input type='text' onChange={handleChange} value={name.category} placeholder='Category' name='category' className='focus:outline-none bg-gray-300 rounded p-2'/>
                    <button className=' bg-amber-500 hover:bg-amber-600 p-2 text-white cursor-pointer rounded shadow'>Post</button>
                </form>
            </div>
        </div>
    )
}

export default FormPost
