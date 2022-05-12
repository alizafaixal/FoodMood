let mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/foodMood');

mongoose.connect('mongodb+srv://Aliza:Asdf1234@cluster0.ukmib.mongodb.net/FoodMood');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    id: String,
    title: String,
    date: String,
    country: String,
    text: String,
    description: String,
    longDescription: String,
    imgURL:  String
});

let Article = mongoose.model('Article' , articleSchema);


let article1 = new Article({
    id: '1',
    title: 'Card title',
    date: new Date(),
    country: 'String',
    text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    imgURL:  'img/food1.jpeg' 
});

//  article1.save().then(() =>  console.log('saved'));

module.exports = { Article : Article};

