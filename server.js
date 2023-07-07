const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//const uri = process.env.ATLAS_URI;
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

const readDelegatorRouter = require('readDelegator');

app.use('/cnbuddy-delegator', readDelegatorRouter);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
           
                     
