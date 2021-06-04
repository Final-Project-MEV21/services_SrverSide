const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dev1:root@cluster0.aebkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//all names are temp
// global function as obj
const login = {
    //inside method (req , res) a must have params for request params and ressult
   checkUserName: function(req , res){
        client.connect(err => {       
            const collection = client.db("HdogT").collection("Users");
            const result =collection.findOne({_id:req.params.userName}).count();
            console.log(result);
            client.close();
            res.send(result);
        });
    }, 
};
module.exports = login;