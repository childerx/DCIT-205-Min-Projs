const express = require('express');
const Student = require('../models/student');

const router = express.Router(); // this creates us a new instance of the router object


router.get('/', (req, res) => {
    Student.find().sort({ createdAt: -1 })
     .then((result) => {
        res.render('index', { title: 'All Students', students: result });
     })
     .catch((err) => {
        console.log(err);
     })
})

router.post('/', (req, res) => {
    const student = new Student(req.body);
    //console.log(req.body);
    student.save()
        .then((result) => {
            res.redirect('/students');
        })
        .catch((err) => {
            console.log(err);
       })
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register a new student' });
})


router.get('/:id', (req, res) => {
    const id = req.params.id;
    Student.findById(id)
        .then((result) => {
            res.render('details', { student: result, title: 'Student Details' });
        })
        .catch((err) => {
            res.render('404', { title: 'Student not found '});
        })
})

module.exports = router;