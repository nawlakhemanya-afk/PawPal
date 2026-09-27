
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Stripe = require("stripe");

const Adoption = require("./Adoption");
const User = require("./User");

const app = express();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));


// Home Page
app.get("/", (req, res) => {
    res.send(`
        <h1>🐾 PawPal</h1>
        <p>Welcome to PawPal!</p>
        <p>Express and MongoDB are connected.</p>
    `);
});


// User Registration
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({
            name: name,
            email: email,
            password: password
        });

        await user.save();

        res.json({
            message: "Registration successful!"
        });

    } catch (error) {
        console.log("Registration Error:", error);

        res.status(500).json({
            message: "Registration failed"
        });
    }
});


// Adoption Form
app.post("/submit", async (req, res) => {
    try {
        const { name, email, pet, phone } = req.body;

        const adoption = new Adoption({
            name: name,
            email: email,
            pet: pet,
            phone: phone
        });

        await adoption.save();

        res.send(`
            <h1>🐾 Adoption Form Submitted!</h1>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Pet:</b> ${pet}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p>Thank you for your interest in PawPal!</p>
        `);

    } catch (error) {
        console.log("Adoption Error:", error);

        res.status(500).send("Error saving adoption form.");
    }
});


// Stripe Payment
app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],

            line_items: [
                {
                    price_data: {
                        currency: "inr",

                        product_data: {
                            name: "PawPal Donation"
                        },

                        unit_amount: 50000
                    },

                    quantity: 1
                }
            ],

            mode: "payment",

            success_url: "http://localhost:3000/payment-success",
            cancel_url: "http://localhost:3000/payment-cancel"
        });

        res.json({
            url: session.url
        });

    } catch (error) {
        console.log("Stripe Error:", error);

        res.status(500).json({
            message: "Payment failed"
        });
    }
});


// Start Server
app.listen(5000, () => {
    console.log("PawPal Express server running at http://localhost:5000");
});

