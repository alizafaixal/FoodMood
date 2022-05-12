let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Aliza:Asdf1234@cluster0.ukmib.mongodb.net/FoodMood');

// mongoose.connect('mongodb://localhost/foodMood');

let Schema = mongoose.Schema;

let inquirySchema = new Schema({
    id : String,
    fname : String,
    lname:String,
    email:String,
    phone: String,
    inquiry: String
});



let Inquiry = mongoose.model('Inquiry', inquirySchema);

let newInquiry = new  Inquiry({
    id : 'String',
    fname : 'String',
    lname:'String',
    email:'String',
    phone: 'String',
    inquiry: 'String' 
});

// newInquiry.save().then(() => console.log('inquiry saved'));

module.exports = { Inquiry : Inquiry};

