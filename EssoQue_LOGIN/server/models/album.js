const mongoose = require('mongoose');
const {Schema} = mongoose;

const AlbumSchema = new Schema({
    nombre: {type: String, required: true},
    fecha: {type: Date, required: true}
});

//Modelo de datos de mongoose
module.exports = mongoose.model('Album', AlbumSchema);