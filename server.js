const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
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
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({"message":"Endpoint working"});
})
app.get('/user-info/:id',(req,res)=>{
    // add a condition to check if req.params.id is not a number
    const user = data[parseInt(req.params.id)-1];
    if(isNaN(req.params.id)){
        res.status(400).json({"message":'Invalid request'});
    }
    if(!user){
        res.status(404).send({"message":'User not found'});
    }

    res.json(user);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})