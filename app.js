const express =  require('express');
const app = express();
const port = 3000;

const web  = require('./routes/web.js')

app.use('/', web)

// optional if the items are kept in a the views folder
app.set('views', './views')

app.set('view engine', 'ejs')

app.listen(port, (err) =>{
    if(err){
        console.log("error starting the server")
    }
    else console.log("server started at port no ", port);
})