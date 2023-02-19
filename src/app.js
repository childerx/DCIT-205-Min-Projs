const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/studentRoutes');


// express app
const app = express();


// CONNECT TO MONGODB
const dbURI = 'mongodb+srv://nanakwame1:Reginakwateng24@cluster0.hscltyz.mongodb.net/Childerx-College?retryWrites=true&w=majority';
mongoose.set('strictQuery', true); // to suppress the Deprecation Warning
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(4000); // listen to request after connection to db has been established
    })
    .catch((err) => {
        console.log(err);
    });


// register view engine 
app.set('view engine', 'ejs');


//middleware & static files(css, images etc)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev'));



// routes
app.get('/', (req, res) => {
    res.redirect('/students');
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// student routes
app.use('/students', studentRoutes);

// 404 page...at every request, this use function will fire as long as a respond hans't been sent yet(middleware)
app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' });
});