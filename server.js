const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
//port is default 5000 for react applciation 
const port = 5000;

// Allow all origins, replace '*' with the specific origin if needed
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



//Connect to the mongobd in the VPS machine
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error('Error', error);
  });


// app get request function test
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


//do not know what below means
app.use(cors());
app.use(express.json());

//listening to the port request
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
