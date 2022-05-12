let mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/foodMood');

mongoose.connect('mongodb+srv://Aliza:Asdf1234@cluster0.ukmib.mongodb.net/FoodMood');
let Schema = mongoose.Schema;

let callbackSchema = new Schema({
    id: String,
    date: String,
    callback: String
});

let Callback = mongoose.model('Callback', callbackSchema);

// let newCallback = new Callback({
//     id: '1',
//     date: new Date(),
//     callback : '04454984594'
// });

//  newCallback.save().then(() => console.log('callbak saved'));

module.exports = {Callback : Callback};