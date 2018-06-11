// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var user = {name: "andrew", age:25};
var {name} = user;

MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
  if (err) console.log("Unable to connect to the server.");
  console.log("Connected to MongoDB server");

  const db = client.db("TodoApp");

  db.collection("Users").find({name: "Michal"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Something went wrong");
  });
  client.close();
});
