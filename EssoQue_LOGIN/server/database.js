const mongoose = require('mongoose');

const URI = 'mongodb://localhost/BD_ESSOQUE_LOGIN';

mongoose.connect(URI)
    .then(db=> console.log('connect'))
    .catch(err => console.error(err));
module.exports=mongoose;
