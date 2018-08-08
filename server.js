const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./lib/routes");
const port = process.env.Port || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use("/", routes);


app.listen(port, ()=>{
    console.log("listening on port " + port);
})
