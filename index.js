const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv').config();
const cors = require("cors");
const app = express();
const port = process.env.PORT 
const mongoString = process.env.DB_CONNECT
mongoose.connect(mongoString)
const database = mongoose.connection;

database.on('error',(error) => {
    console.log(error);
});
database.once('connected',() => {
    console.log('Database connected')
});

const routes = require('./routes/route');
app.use(express.json(),cors());
app.get("/", (req, res) => {
    res.send(`Hey it's working !!`);
});
app.listen(port, () => {
    console.log(`Server started at ${port}`)
})

app.use('/api',routes)
