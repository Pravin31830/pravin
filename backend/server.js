import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectMongoDB from './db/connectMongoDB.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

connectMongoDB();

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});


const Contact = mongoose.model('Contact', contactSchema);

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// Endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

  // Save to MongoDB
  const newContact = new Contact({ name, email, message });
  await newContact.save();

  // Send email notification
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Message received and email sent successfully' });
  });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });