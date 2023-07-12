const router = require('express').Router();
const  mongoose = require('mongoose');


router.get('/', async (req, res) => {
  try {
    const collectionName = 'steemitdb'; // connect with the db
    const data = await mongoose.connection.db.collection(collectionName).find().toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the database' });
  }
});


module.exports = router;
