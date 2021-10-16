const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const port = process.removeListener.PORT || 4000;

app.get('/',(req,res) => {
      res.send("API is Running");
})


app.listen(port, console.log(`server started at port ${port}`))