const express = require('express');
const app = express();
let data = [
    {
        "name":"Tomas",
        "lastName" :"Barrios",
        "email":"tomasbagu@unisabana.edu.co",
        "id":"0000299043"

    }
];
app.listen(3000);
console.log(server on port${3000});
app.use(express.json());
app.get('/users/:id',(req,res)=>{
    // add a condition to check if req.params.id is not a number
    
    if(parseInt(req.params.id)>data.length){
        res.status(404).send('User not found');
    }
    const user = data[parseInt(req.params.id)-1];
    res.json(user);
})