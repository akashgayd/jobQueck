const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./configdata/db");
const narratorRoutes = require("./routes/narratorRoutes");
const jobDecriptionRouter = require("./routes/jobDecriptionRouter");

const contactUsRoutes = require('./routes/constctUsroutes');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/narrators", narratorRoutes);
app.use("/api/jobdetails", jobDecriptionRouter);
app.use("/api/contactus", contactUsRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
