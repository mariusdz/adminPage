const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const appointmentsController = require("./controllers/appointments.controller.js");

const server = express();
server.use(express.json());
server.use(cors());

const MONGODB_URI =
'mongodb+srv://marius:marius@cluster0.texl2xz.mongodb.net/?retryWrites=true&w=majority'

const PORT = 3000;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log("Connected to MongoDB");

		server.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});

server.use("/api/appointments", appointmentsController);
