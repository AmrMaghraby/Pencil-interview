var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
var url = "mongodb+srv://dbUser:dbUser@cluster0.7zkhe.mongodb.net/mydb?retryWrites=true&w=majority";
import express from 'express';
import db from './db/db';
// Set up the express app
const app = express();
var dbo;

MongoClient.connect(url, async  function(err, db) {
  if (err) throw err;
  dbo = db.db("mydb");
  console.log("Connnected successfully.");
})

app.get('/api/v1', (req, res) => {
  var query = req.query.q;
  console.log(query);
  
 dbo.collection("questions").find({ $or: [{Annotation1 : (query)}, { $or: [ {Annotation2 : (query)}, { $or: [  {Annotation3: (query)}, {$or: [  {Annotation4: (query)}, {Annotation5: (query)} ] } ] } ] } ] }).toArray(function(err, result) {
   if (err) throw err;
   console.log(result);
   res.status(200).send({
     success: 'true',
     message: 'data retrieved successfully',
     questions: result
   })
 })
});

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`)
});

