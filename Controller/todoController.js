const MyToDo = require('../Models/ToDoModel');

const AddData = async (req, res) => {

  try {
    // const task = req.body.task;
    const myData = new MyToDo({
      task: req.body.task
    });
    const saveData = await myData.save();
    res.status(200).send({ success: true, data: saveData })
  }
  catch (error) {
    console.log(error);
    res.status(400).send(error.message);
    // res.status(400).send({ message: "error" });
  }

}





const GetData = async (req, res) => {

  try {


    const storedData = await MyToDo.find();

    // console.log(storedData);

    /*    const showData = storedData.map(item => ({
    
          task: item.task
    
        }));    */

    // res.status(200).json(showData);
    res.status(200).send({ success: true, data: storedData });


  } catch (error) {
    res.status(400).send({ success: false, messgae: "error" });

  }


}



// Update data

const UpdateData = async (req, res) => {

  try {

    const { id } = req.params;
    // console.log(id);

    //  const id = req.params;
    const updatedData = await MyToDo.findByIdAndUpdate({ _id: id }, { done: true })

    res.status(200).send({ message: "data updated successfully" });

  } catch (error) {
    res.status(400).send(error.message);
  }

}





//  Delete

const deleteData = async (req, res) => {

  try {
    // const  id  = req.params;
    const { id } = req.params;

    const Delete = await MyToDo.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "data deleted successfully" });

  }
  catch (error) {

    res.status(400).send({ messgae: "Error" });

  }



}



module.exports = {
  AddData,
  GetData,
  UpdateData,
  deleteData
}