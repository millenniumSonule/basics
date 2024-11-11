const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({
        a:'as'
    });
});
 
app.listen(3000, ()=>{
    console.log('server is running on http://127.0.0.1:3000')
});