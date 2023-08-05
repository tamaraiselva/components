const { MongoClient, ObjectId } = require('mongodb');

const mongoURL = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'crudapplication'; // Replace with your database name

const client = new MongoClient
(mongoURL, 
    {
        useUnifiedTopology: true,
    }
);

let db;

const connectDB = async() => 
{
    try 
    {
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB');
    } catch (error) 
    {
        console.error('Error connecting to MongoDB:', error);
    }
};

const getItemsCollection = () => db.collection('items');

// CRUD Operations

// Create (POST) - Add a new item
const addItem = async(itemData) => 
{
    try 
    {
        const collection = getItemsCollection();
        const newItem = await collection.insertOne(itemData);
        return newItem.insertedId;
    } catch (error) 
    {
        console.error('Error adding item:', error);
        throw new Error('Something went wrong while adding the item.');
    }
};

// Read (GET) - Get all items
const getItems = async() => {
    try {
        const collection = getItemsCollection();
        const items = await collection.find({}).toArray();
        return items;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw new Error('Something went wrong while fetching items.');
    }
};

// Update (PUT) - Update an item
const updateItem = async(itemId, updatedData) => {
    try {
        const collection = getItemsCollection();
        await collection.updateOne({ _id: ObjectId(itemId) }, { $set: updatedData });
    } catch (error) {
        console.error('Error updating item:', error);
        throw new Error('Something went wrong while updating the item.');
    }
};

// Delete (DELETE) - Delete an item
const deleteItem = async(itemId) => {
    try {
        const collection = getItemsCollection();
        await collection.deleteOne({ _id: ObjectId(itemId) });
    } catch (error) {
        console.error('Error deleting item:', error);
        throw new Error('Something went wrong while deleting the item.');
    }
};

module.exports = {
    connectDB,
    addItem,
    getItems,
    updateItem,
    deleteItem,
};