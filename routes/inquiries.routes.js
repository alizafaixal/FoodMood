let Inquiry = require('../model/inquiries.model').Inquiry;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

router.get('/', async (req, res) =>{
    let inquiries = await Inquiry.find();
    res.send(inquiries);
});

router.post('/', async (req,res) => {
    let reqBody = req.body;
    let newInquriry = new Inquiry({
        id: uniqid(),
        fname : reqBody.fname,
        lname:reqBody.lname,
        email:reqBody.email,
        phone: reqBody.phone,
        inquiry: reqBody.inquiry 
    });
    await newInquriry.save();
    res.send('inquiry saved');
});

router.delete('/:id', async(req,res) =>{
    let id = req.params.id;
    await Inquiry.deleteOne({id:id});
    res.send('Deleted');
})

module.exports = router;