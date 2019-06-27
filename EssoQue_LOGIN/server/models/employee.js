const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    
        nombre: { type: String, required: true},
        seccion: { type: String, required: true },
        cum: { type: String, required: true}
});

module.exports = mongoose.model('Employee', employeeSchema);