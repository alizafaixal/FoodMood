let Callback = require('../model/callbacks.model').Callback;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

router.post('/', async (req,res) =>{
    let reqBody = req.body;
    let newCallback = new Callback({
        id: uniqid(),
        date: new Date(),
        callback : reqBody.callback
    });
    await newCallback.save();
    res.send('callback saved');
})

router.get('/' , async (req, res) =>{
    let callbacks = await Callback.find();
    res.send(callbacks);
})

router.delete('/:id', async (req,res) => {
    let id = req.params.id;
    await Callback.deleteOne({id: id});
    res.send('Deleted');
})

module.exports = router;