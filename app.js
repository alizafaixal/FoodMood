let express = require('express');
let Article = require('./model/articles.model').Article;

let app = express();
let articlesRouter = require('./routes/articles.routes');
let callbacksRouter = require('./routes/callbacks.routes');
let inquiriesRouter = require('./routes/inquiries.routes');
let usersRouter = require('./routes/users.routes');
let auth = require('./controllers/auth');
let cookieParser = require('cookie-parser');

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());
app.set('view engine', 'ejs')
app.use('/articles', articlesRouter);
app.use('/inquiries', inquiriesRouter);
app.use('/callbacks', callbacksRouter);
app.use('/users', usersRouter );

app.get('/blog', async (req,res)=>{
    let id = req.query.id;
    let article = await Article.findOne({id: id});
    res.render('blog' , {
        title: article.title,
        imgURL: article.imgURL,
        date: article.date,
        text: article.text,
        longDescription: article.longDescription

    })
});



app.get('/admin', (req,res) =>{
    let token = req.cookies['auth_token'];
    if(token && auth.checkToken(token)){
        res.render('admin');
    }else{
        res.redirect('/login');
    }
})

app.get('/login', (req,res) =>{
    let token = req.cookies['auth_token'];
    if(token && auth.checkToken(token)){
        res.redirect('/admin');
    }else{
        res.render('login');
    }
})


