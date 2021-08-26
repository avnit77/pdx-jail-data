const mongoose = require('mongoose');
// const { parse } = require('url');


module.exports = () => {
  mongoose.connect(
    process.env.MONGODB_URI, 
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

  //useCreateIndex: true,


  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function() {
    console.log('Connected successfully');
  });

  db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

  db.on('error', () => {
    console.log('Error connecting to MongoDB');
  });
};
