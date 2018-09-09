const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./lib/routes");
const port = process.env.Port || 3000;

app.use(bodyParser.json({type:['application/json'],limit:'50mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
app.use(bodyParser.text({limit:'50mb'}));
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://192.168.77.100:4200')
    res.header('Access-Control-Allow-Methods','GET, POST')
    return next()
});



app.use(express.static('public'));
app.use("/", routes);


app.listen(port, ()=>{
    console.log("listening on port " + port);
})
