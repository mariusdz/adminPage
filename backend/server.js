const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/admin-app.users',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );

// User schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Use middleware to parse JSON 
app.use(express.json());

// Register route
app.post('/register', async (req, res) => {
    const { email, name, surname, password } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).send('User already exists, go to login page');
        }

        //Define password
        const enteredPassword = password;

        // Create a new user
        const newUser = new User({ email, name, surname, password: enteredPassword });
        await newUser.save();

        res.status(201).send('Registered successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).send({ message: 'User not found, register first!' });
        }


        const passwordMatch = password === user.password;

        if (!passwordMatch) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        res.status(200).send({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
