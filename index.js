const express = require('express')
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.send("<h2>Hello world! !!!</h2>")
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
