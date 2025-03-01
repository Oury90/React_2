import React, { use, useState } from 'react'

const optionSelectes = ["Select here...", "business", "books", "marketing", "horror", "fiction", "adventure"]

const Search = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("Select here...");


    // Filter items based on the selected category
    const filteredElements = selectedCategory === "Select here..." 
        ? props.allDatas 
        : props.allDatas.filter((data) => data.category.toLowerCase() === selectedCategory.toLowerCase());

    console.log(filteredElements)
    return (
        <div>
            <h2>Amadou</h2>
            <div className='py-5'>
                <select 
                onChange={(e) => setSelectedCategory(e.target.value)}
                id="products" name="products" className='bg-gray-300 rounded w-48 py-2 px-4 focus:outline-none' value={selectedCategory}>
                    {
                        optionSelectes.map((optionSelect, index) =>(
                            <option value={optionSelect} key={index}>{optionSelect}</option>
                        ))
                    }
                </select>
            </div>

            <div className='flex items-center gap-2 flex-wrap'>
                {
                    filteredElements.map((data, index) =>(
                        <div key={index} className='max-w-70 bg-gray-100 rounded shadow-ms p-2'>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <p>{data.category}</p>
                        </div>  
                    ))
                }

            </div>
        
        </div>
    )
}

export default Search
