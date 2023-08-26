const express = require('express');
const cors = require('cors');
// database import 
const connectToDatabase = require("./Config/db")
// routes import 
const userRoutes = require('./App/Routes/UserInfo_Router');
const faqRoutes = require('./App/Routes/FAQ_Router');
const contactInfoRoutes = require('./App/Routes/ContactInfo_Router');
const countryDetailsRoutes = require('./App/Routes/CountryDetail_Router');
const studentaReviewsRoutes = require('./App/Routes/StudentReview_Router');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to the database
connectToDatabase();
// Configure your routes
app.use('/api/users', userRoutes); 
app.use('/api/faq', faqRoutes); 
app.use('/api/contactinfo', contactInfoRoutes); 
app.use('/api/countrydetails', countryDetailsRoutes); 
app.use('/api/studentreview', studentaReviewsRoutes); 

app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
});
