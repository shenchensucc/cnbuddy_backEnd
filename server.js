const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();

require('dotenv').config();

const app = express();
//port is default 5000 for react applciation 
const port = 5000;

//Testing the get request

app.get('/',(req, res) => {
  res.send('Hello, get back to you lol');
});


//Connect to the mongobd in the VPS machine
mongoose.connect('mongodb://marcoxzh3:MarcoXZh3_ualberta.ca@localhost:27017/steemitdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error('Error', error);
  });

const connection = mongoose.connection;
connection.once('open', () =>{
  console.log("MongoDB -once open- tested successfully");
});


//Testing console.log data into vps try

async function fetchData() {
  try {
    const data1 = await mongoose.connection.db.collection('delegations').find().toArray();
    console.log(data1);
  } catch (error) {
    console.error(error);
  }
}

fetchData();


// router get request function test
app.get('/cnbuddy-delegator', async (req, res) => {
  try {
    const collectionName = 'delegations'; // connect with the db
    const data = await mongoose.connection.db.collection(collectionName).find().toArray();
    res.json(data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the database' });
  }
});


//use delegatorRouter 
//const readDelegatorRouter = require('readDelegator.js');
//app.use('/cnbuddy-delegator', readDelegatorRouter);

//do not know what below means
app.use(cors());
app.use(express.json());

//listening to the port request
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
           
                     
