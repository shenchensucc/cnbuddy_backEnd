const express = require('express');
const cors = require('cors');
const mogoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ALAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
coonection.once('open', () => {
    console.log("MongoDB connected");
});


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
           
                     
