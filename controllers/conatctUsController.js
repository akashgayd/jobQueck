const Contactus = require('../models/contactUs'); // Ensure the correct path

const PostContactus = async (req, res) => {
  // Extract the fields from the request body
  const { name, email, Number, message } = req.body;

  // Input validation
  if (!name || !email || !Number || !message) {
    return res.status(400).send({ error: 'All fields are required.' });
  }

  const sampleContact = {
    name,
    email,
    Number,
    message,
  };

  try {
    // Save to the database
    const contactus = new Contactus(sampleContact);
    await contactus.save();

    // Respond with success
    res.status(201).send({ success: true, data: contactus });
  } catch (error) {
    console.error('Error saving contact us information:', error);
    res.status(500).send({ error: 'Failed to save contact us information' });
  }
};

module.exports = { PostContactus };
