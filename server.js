const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes");
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use("/", routes);


app.listen(port, ()=>{
    console.log("listening on port " + port);
})
