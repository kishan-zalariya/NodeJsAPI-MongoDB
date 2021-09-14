const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

// DB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected"));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const postRoutes = require('./routes/post');

// middleware
app.use(morgan("dev"));
/* body parser */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
/* validation */
app.use(expressValidator());

app.use("/", postRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`A Node Js API is listening on port: ${port}`);});