const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const Appointment = mongoose.model("appointment", appointmentSchema);
module.exports = Appointment;