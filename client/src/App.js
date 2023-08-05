// src/App.js
import React, { useState, useEffect } from 'react';
import ItemList from 'C:\Users\Dell\Desktop\components\ItemList.js';
import AddItemForm from 'C:\Users\Dell\Desktop\components\AddItemForm.js';
import EditItemForm from 'C:\Users\Dell\Desktop\components\itemcontroller.js';
import axios from 'axios';

const App = () => {
        const [items, setItems] = useState([]);
        const [editItem, setEditItem] = useState(null);

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

        const handleAddItem = (newItem) => {
            setItems((prevItems) => [...prevItems, newItem]);
        };

        const handleUpdateItem = (updatedItem) => {
            setItems((prevItems) =>
                prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
            );
            setEditItem(null);
        };

        return ( <
            div >
            <h1> MERN Stack CRUD Application </h1> 
                <ItemList items = { items }/> 
                <AddItemForm onAddItem = { handleAddItem }/> 
                {
                    editItem && < EditItemForm item = { editItem }
                    onUpdateItem = { handleUpdateItem }/>} 
            </div>
            );
            
        };
        
export default App;