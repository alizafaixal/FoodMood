let Article = require('../model/articles.model').Article;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();



router.get('/' , async (req, res) =>{
    let articles = await Article.find();
    res.send(articles);
});

router.post('/', async (req, res) => {
    let reqBody = req.body;
    let newArticle = new Article({
        id: uniqid(),
        title: reqBody.title,
        date: new Date(),
        country: reqBody.country,
        text: reqBody.text,
        description: reqBody.description,
        longDescription : reqBody.longDescription,
        imgURL:  reqBody.imgURL
    });
    await newArticle.save();
    res.send('created');
});

router.delete('/:id', async (req,res) => {
    let id = req.params.id;
    await Article.deleteOne({id: id});
    res.send('deleted');
})

router.get('/:id', async (req, res) =>{
    let id = req.params.id;
    let article = await Article.findOne({id: id});
    res.send(article);
})


router.put('/:id', async(req,res) =>{
    let id = req.params.id;
    await Article.updateOne({id: id} , req.body);
    res.send('updated');
})

module.exports = router;