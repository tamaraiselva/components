// src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async() => {
        try {
            const response = await axios.get('/api/items'); // Replace with your backend API endpoint
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    return ( <
        div className = "container mx-auto px-4 py-8" >
        <h2 className = "text-2xl font-bold mb-4" > Item List </h2>
        <ul> 
        {
            items.map((item) => ( <
                li key = { item.id }
                className = "border rounded-md p-4 my-2" >
                <strong className = "text-lg font-semibold"> 
                { item.name } 
                </strong>: 
                {item.description} 
                </li>
            ))
        } 
        </ul> 
        </div>
    );
};

export default ItemList;