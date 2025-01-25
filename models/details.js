const mongoose = require('mongoose');

// Define the schema for job details
const detailsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  postJoburl: {
    type: String,
    required: true
  },
  datePost: {
    type: String,
    required: true
  },
  dateInNum: {
    type: String,
    required: true
  },
  LocationJoburl: {
    type: String,
    required: true
  },
  NameLocation: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  },
  SalaryJoburl: {
    type: String,
    required: true
  },
  OfferSalary: {
    type: String,
    required: true
  },
  InHandSalary: {
    type: String,
    required: true
  },
  ClockJoburl: {
    type: String,
    required: true
  },
  ExparitionData: {
    type: String,
    required: true
  },
  ExpData: {
    type: String,
    required: true
  },
  ExprinceJoburl: {
    type: String,
    required: true
  },
  exprience: {
    type: String,
    required: true
  },
  UserExprinice: {
    type: String,
    required: true
  },
  indrustryJoburl: {
    type: String,
    required: true
  },
  NameIndrustry: {
    type: String,
    required: true
  },
  Indrustry: {
    type: String,
    required: true
  },
  quelificationJoburl: {
    type: String,
    required: true
  },
  Quelfication: {
    type: String,
    required: true
  },
  Quelified: {
    type: String,
    required: true
  },
  careerLevelUrl: {
    type: String,
    required: true
  },
  careerPath: {
    type: String,
    required: true
  },
  career: {
    type: String,
    required: true
  },
  jonDescription: {
    type: String,
    required: true
  },
  jobdetailsDetails: {
    type: String,
    required: true
  },
  responbilities: {
    type: String,
    required: true
  },
  responsiblityPath: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  skillsPath: {
    type: String,
    required: true
  }
});


const Jobdetails = mongoose.model('Jobdetails', detailsSchema);

module.exports = Jobdetails;
