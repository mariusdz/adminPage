const express = require("express");

const Appointment = require("../models/appointment.model.js");

const router = express.Router();

//POST
//add new appointment
router.post("/", (req, res) => {
	//get appointment data from request body
	const appointmentData = req.body;

	//save new appointment to Appointment model;
	const appointment = new Appointment(appointmentData);

	appointment
		.save()
		.then(() => {
			res.send({ message: "Appointment saved successfully" });
		})
		.catch((err) => {
			console.error(err);
			res.send({ message: "Appointment was not saved, try again" });
		});
});

//GET
// Get all appointments
router.get("/", (_, res) => {
	Appointment.find()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			console.error(err);
			res.send({ message: "Error has occured, please try again" });
		});
});

//PUT
//Update an appointment
router.put("/:id", (req, res) => {
	const appointmentId = req.params.id;
	const updatedAppointmentData = req.body;

	Movie.findByIdAndUpdate(appointmentId, updatedAppointmentData)
		.then(() => {
			res.send({ message: "Appointment updated successfully" });
		})
		.catch((err) => {
			console.error(err);
			res.send({ message: "Appointment was not updated, try again" });
		});
});

//DELETE
//Delete appointment
router.delete("/:id", (req, res) => {
	const appointmentId = req.params.id;

	Appointment.findByIdAndDelete(appointmentId)
		.then(() => {
			res.send({ message: "Appointment deleted successfully" });
		})
		.catch((err) => {
			console.error(err);
			res.send({ message: "Appointment was not deleted, try again" });
		});
});

module.exports = router;