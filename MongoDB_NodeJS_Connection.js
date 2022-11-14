//Connection between Mongodb Database and NodeJS

const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/lib";
const client = new MongoClient(uri);

async function connection() {
  try {
    await client.connect();
    const db = client.db('lib');
    const collection = db.collection('books');
    // Insertion
    const insertion = await collection.insertOne({name:'Big Data',author:'SD',pages:340,price:550})
    // Updation
    const updation = await collection.updateOne({pages:500},{$rename:{'bokkknameRenamed':'name'}})
    //Deletion
    const deletion = await collection.deleteOne({name: 'C++ Book'})
    // Find the first document in the collection
    const find = await collection.find();
    console.log(insertion);
    console.log(updation)
    console.log(deletion)
    console.log(find)
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
connection().catch(console.error);
