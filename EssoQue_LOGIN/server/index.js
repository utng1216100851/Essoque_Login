require('./passportConfig')
const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const multer = require('multer');
const uuid = require('uuid/v4');
const {format} = require('timeago.js');
const bodyParser = require('body-parser');

const passport=require('passport');
const {mongose} = require('./database');

// Settings

//Configuraciones del servidor  SETTINGS
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Procesamientos de datos    MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename)=>{
        cb(null, uuid() + path.extname(file.originalname));
    }
});

// Middlewares
app.use(multer({storage: storage}).single('image'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());


//variables globales
app.use((req, res, next)=>{
    app.locals.format = format;
    next();
})


// Routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/employees2', require('./routes/employee.routes2'));
app.use('/api/eventos',require('./routes/evento.routes'));
app.use('/api/precios',require('./routes/precio.routes'));
app.use('/api/canciones',require('./routes/cancion.routes'));
app.use('/api/productos',require('./routes/producto.routes'));
app.use('/api/albumes',require('./routes/album.routes'));


app.use('/api', require('./routes/index.router'));
app.use('/api', require('./routes/index.router'));
app.use('/api', require('./routes/index.router'));

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

//static files
app.use(express.static(path.join(__dirname, 'public'))); 


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});