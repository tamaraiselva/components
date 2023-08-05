// src/components/EditItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EditItemForm = ({ item, onUpdateItem }) => {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const updatedItem = { name, description };
            const response = await axios.put(`/api/items/${item.id}`, updatedItem); // Replace with your backend API endpoint
            onUpdateItem(response.data);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return ( 
        <form className = "container mx-auto px-4 py-8"
        onSubmit = { handleSubmit } >
        <h2 className = "text-2xl font-bold mb-4" > Edit Item </h2> 
        <div className = "mb-4" >
        <label htmlFor = "name"
        className = "block text-lg font-semibold" > Name: </label> 
        <input type = "text"
        id = "name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        className = "border rounded-md p-2 w-full" />
        </div>
        <div className = "mb-4" >
        <label htmlFor = "description"
        className = "block text-lg font-semibold" > Description: 
        </label> 
        <textarea id = "description"
        value = { description }
        onChange = {
            (e) => setDescription(e.target.value) }
        className = "border rounded-md p-2 w-full" />
        </div> 
        <button type = "submit"
        className = "bg-blue-500 text-white py-2 px-4 rounded-md" > Update Item </button> 
        </form>
    );
};

export default EditItemForm;