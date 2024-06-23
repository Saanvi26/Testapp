const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/login",(req,res)=>{   
    res.send('<h1>Please login</h1>');
});

app.listen(port, () => {
    console.log(`Server is running`);
})