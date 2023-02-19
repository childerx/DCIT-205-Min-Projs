const mongoose = require('mongoose');
const Schema = mongoose.Schema; // this is going to define the structure of the document we gon store in the collection of the db

const studentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    program: {
        type: String,
        require: true
    },
    date_of_birth: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
}, {timestamps: true });

//model- surrounds and provides us with an interface by which to communicate with the db collection
const Student = mongoose.model('Student', studentSchema);

// export the model so that it can be use in other files of the project
module.exports = Student;