const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
//port is default 5000 for react applciation 
const port = process.env.PORT || 5000;

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

//use delegatorRouter 
const readDelegatorRouter = require('/readDelegator.js');
app.use('/cnbuddy-delegator', readDelegatorRouter);

//do not know what below means
app.use(cors());
app.use(express.json());

//listening to the port request
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
           
                     
