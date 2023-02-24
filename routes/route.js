const express = require('express')

const router = express.Router();

const Model = require('../model/model')
// post method
router.post('/post',  (req,res) => {
   const data = new Model({
    title: req.body.title,
    journal:req.body.journal
   })
   try{
    const dataSave = data.save();
    res.status(200).json(dataSave);
   }catch(error){
    res.status(400).json({message: error.message})
   }
});
// get all method
router.get('/get', async (req,res) => {
try{
    const data = await Model.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
});

router.get('/get/:id', async (req,res) =>{
   try{
    const data = await Model.findById(req.params.id);
    res.json(data);
   }
   catch(error){
    res.status(500).json({message: error.message})
   }
});


router.put('/update/:id',async (req,res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new : true};
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
            res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});

router.delete('/delete/:id', async (req,res) => {
    try{
        const data = await Model.findByIdAndDelete(req.params.id);
        res.json(data);
       }
       catch(error){
        res.status(500).json({message: error.message})
       }
});

module.exports = router;