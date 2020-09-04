const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    reg_id: {
        type: Number,
        required: [true, 'Registration id is required']
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender field is required']
    },
    class: {
        type: String,
        required: [true, 'Class field is required']
    },
    roll_no: {
        type: Number,
        required: [true, 'Roll number is required']
    },
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;