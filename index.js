const express = require("express");
const cors = require("cors");
const  connectDatabase  = require("./database");
const  moviesRouter  = require("./routes/movies");

const app = express();
app.use(express.json())
app.use(cors());
app.use(looger)


function looger(req,res,next){
    console.log(new Date(),req.method,req.path);
    next()
}
app.use(moviesRouter)
connectDatabase().then(()=>{
    app.listen('3001', () => {
        console.log(`Server running on port 3001`)
    })
})




