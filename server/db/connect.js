const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url);
};
//test
module.exports = connectDB;
