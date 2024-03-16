const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MyToDoModel = require('./Models/ToDoModel');



const app = express();
app.use(cors());
app.use(express.json());



// mongoose.connect('mongodb://127.0.0.1:27017/ToDoByMERN');
mongoose.connect('mongodb+srv://pushpamgaurav3:6e3IvBBzi70axQky@cluster0.fdsogra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


const todoController = require('./Controller/todoController');
app.post('/add', todoController.AddData);


app.get('/get', todoController.GetData)


// When click on text of notes then put work
app.put('/update/:id', todoController.UpdateData);


app.delete('/delete/:id', todoController.deleteData);



/*
app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
})
*/


// app.post('/add', AddData);

/*
app.post('/add', (req, res) => {
  const task = req.body.task;
  MyToDoModel.create({
    task: task
  }).then(result => res.json(result))
    .catch(err => res.json(err))
})
*/


app.listen(3000, () => {
  console.log("server is running");
})