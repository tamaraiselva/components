// src/components/AddItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = ({ onAddItem }) => 
{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const newItem = { name, description };
            const response = await axios.post('/api/items', newItem); // Replace with your backend API endpoint
            onAddItem(response.data);
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (<
        form className = "container mx-auto px-4 py-8"
        onSubmit = { handleSubmit } >
        <h2 className = "text-2xl font-bold mb-4"> Add Item </h2> 
        <div className = "mb-4">
        <label htmlFor = "name"
        className = "block text-lg font-semibold"> Name: </label> 
        <input type = "text"
        id = "name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        className = "border rounded-md p-2 w-full"/>
        </div> 
        <div className = "mb-4">
        <label htmlFor = "description"
        className = "block text-lg font-semibold"> Description: </label> 
        <textarea id = "description"
        value = { description }
        onChange = {
            (e) => setDescription(e.target.value) }
        className = "border rounded-md p-2 w-full"/>
        </div> 
        <button type = "submit"
        className = "bg-blue-500 text-white py-2 px-4 rounded-md"> Add Item </button> 
        </form>
    );
};
export default AddItemForm;