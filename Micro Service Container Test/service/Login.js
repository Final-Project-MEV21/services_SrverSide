//require section
const {MongoClient} = require('mongodb');

//global const's declaration
const err = "ERROR";
//const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const uri = "mongodb://13.53.192.16:27017/"
const client = new MongoClient(uri);


const login = {
    getUserName:async function(req , res ){
    //declaring the answer
    let answer = null;
        try{ 
            //connect the client to the server
            await client.connect();
            //Establish and verify connection 
            //first with the db and then with the collection
            const database = await client.db("dogsdb");
            const collection = await database.collection("Users")
        
            //query to get the uniq user name (_id)
            const query = { "_id":req.params.userName }
                
            answer = await collection.findOne(query);
            answer = answer._id;        
        }finally{
            res.json({"authenticated":answer});
        }
    },
};

module.exports = login;