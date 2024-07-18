const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  Name : {type: String, required: true},
  courseName: { type: String, required: true },
  totalDuration: { type: Number, required: true },
  currentYearOfCourse: { type: Number, required: true },
  instituteName: { type: String, required: true },
  affiliatedUniversity: { type: String, required: true },
  currentYearFee: { type: Number, required: true },
  fatherFullName: { type: String, required: true },
  motherFullName: { type: String, required: true },
  postalAddress: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  alternateMobileNumber: { type: String },
  email: { type: String, required: true, unique: true },
});

const ScholarDetail = mongoose.model('ScholarDetail', studentSchema);

module.exports = ScholarDetail;
