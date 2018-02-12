const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 7800;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
   res.send('index');
});

app.listen(port, (err)=>{
    if(err){
        console.error(err);
    }
    console.log(`Magic at ${port}`);
});