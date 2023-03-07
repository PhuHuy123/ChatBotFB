import express  from "express";
import bodyParser from "body-parser"
import viewEngine from "./configs/viewEngine";
import initWebRoutes from './routes/web';
require('dotenv').config();

let app = express();

viewEngine(app);
initWebRoutes(app);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let port = process.env.PORT || 8080;
// port undefined => port = 8080

app.listen(port,() => {
    // callback
    console.log("Backend nodejs is running on port: " + port)
})