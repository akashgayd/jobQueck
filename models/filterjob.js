
const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    salary: String,
    type: String,
    location: String,
    category: String,
    img: String, // Image URL
  });
 

  const job  =  mongoose.model('joblist',jobSchema)
module.exports = job;