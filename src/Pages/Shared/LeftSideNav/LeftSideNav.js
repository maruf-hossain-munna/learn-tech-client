import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://learn-tech-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])


    return (
        <div>
            <h2>All categories: {categories.length} </h2>
            <div>
                {
                    categories.map(category => <p key={category.id} 
                    className='bg-primary px-3 py-2 rounded-4 '>
                        <Link className='text-color' to={`/category/${category.id}`}> {category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;