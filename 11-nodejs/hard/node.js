// //## Section 4  udemy videos
// const Joi = require('joi');
// const express = require('express');
// const app = express();

// app.use(express.json());

// // const employees = [
// //     {id: 1, name: 'Bob', salary: 5000, building: "A"},
// //     {id: 2, name: 'Bill', salary: 6000, building: "A"},
// //     {id: 3, name: 'Ben', salary: 5500, building: "B"},
// //     {id: 4, name: 'Beth', salary: 7000, building: "A"},
// //     {id: 5, name: 'Betty', salary: 8000, building: "A"},
// //     {id: 6, name: 'Boddy', salary: 6500, building: "C"},
// //     {id: 7, name: 'Blake', salary: 9000, building: "C"},
// //     {id: 8, name: 'Brook', salary: 4000, building: "B"},
// //     {id: 9, name: 'Beatrice', salary: 3500, building: "A"},
// //     {id: 10, name: 'Bella', salary: 9000, building: "B"}
// // ];

// app.get('/node', (req, res) => {
//     res.send('Hard Challenge NodeJS');
// });

// app.get('/employees', (req, res) => {
//     res.send(employees);
// });

// app.post('/employee', (req, res) => {
// const schema = {
//     name: Joi.string().min(3).required()
// };

// const reult = Joi.validate(req.body, schema);
// if (result.error) {
// // 400 BAD Request
// res.status(400).send(result.error.details[0].message);
// return;
// }

// const employee = {
//     id: courses.length + 1,
//     name: req.body.name
// };
// employees.push(employee);
// res.send(employee);
// });

// app.get('/employees/:id', (req, res) => {
//     const employee = employees.find(c => c.id === parseInt(req.params.id));
//     if (!employee) res.status(404).send('Employee does not exist!');//404 ObJ NOT Found
//     res.send(employee);
// });


// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));







let express = require('express')
let app = express()
let data = require('../hard/employees.json')
app.get('/test', function(req,res){
    res.send("Hello World")
})
app.get('/employees', (req,res) => {
    if(!data){
        res.status(404).send(`EMPLOYEE NOT FOUND`)
    }
    res.send(data)
})
app.get('/employees/:id', function (req,res){
    const sData = data.employees.find(function(employees){
        return parseInt(req.params.id) === employees.id
    })
    if(!sData){
        res.status(404).send(`INVALID EMPLOYEE ID`)
    }
    res.send(sData)
})
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
})