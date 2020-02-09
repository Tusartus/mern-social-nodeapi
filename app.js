const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();


// bring in routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const  userRoutes = require('./routes/user');

mongoose
    .connect(process.env.DATABASE,  {
        useNewUrlParser: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});



// middleware -
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


app.use('/', postRoutes);
app.use('/', authRoutes);
app.use('/', userRoutes);

//to send error when authorization  bearer + token 
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' });
    }
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});


