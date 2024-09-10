const express = require('express');
const app = express();
let data = [
    {
        "name":"Tomas",
        "lastName" :"Barrios",
        "email":"tomasbagu@unisabana.edu.co",
        "id":"0000299043"

    },
    {
        "name":"Rafael",
        "lastName" :"Salcedo",
        "email":"rafaelsava@unisabana.edu.co",
        "id":"0000299495"}
];
app.listen(3000);
console.log(`server on port${3000}`);
app.use(express.json());
app.get('/user-info/:id',(req,res)=>{
    // add a condition to check if req.params.id is not a number
    if(isNaN(req.params.id)){
        res.status(400).send('Invalid request');
    }
    if(parseInt(req.params.id)>data.length || parseInt(req.params.id)<1){
        res.status(404).send('User not found');
    }
    const user = data[parseInt(req.params.id)-1];
    res.json(user);
})
