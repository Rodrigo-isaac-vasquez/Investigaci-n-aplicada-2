const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

///cosas de la vida.

app.set('port',process.env.PORT || 3000);

///aqui vamos a poner los mildware o algo adi XD;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

///ruta 

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/page',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'page.html'));
});


///el server has beggin;
app.listen(app.get('port'), () => {
    console.log(`server port ${app.get('port')}`);
});