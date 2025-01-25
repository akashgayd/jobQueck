const Contactus = require('../models/contactUs'); // Ensure the correct path

const PostContactus = async (req, res) => {
    try {
        const contactus = new Contactus(req.body);
        await contactus.save();
        res.status(201).send(contactus);
    } catch (error) {
        res.status(500).send({ error: 'Failed to save contact us information' });
    }
}

module.exports = { PostContactus };