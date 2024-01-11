const express = require('express');
const router = express.Router();

const app =  express();


//Routing
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('index')
});

app.listen(process.env.PORT ||3000, ()=>{
    
    console.log("servidor iniciado En el puerto 3000");


});
