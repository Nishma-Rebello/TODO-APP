var express=require('express');
var app= express();
var mongoose= require('mongoose');
var ejs= require('ejs');


//connect to mongodb database
mongoose.connect('mongodb+srv://nishma:nishma@cluster0.mreppbq.mongodb.net/?retryWrites=true&w=majority');

//made schema and turned it into a model
var sch=  mongoose.Schema({
    item: String
});

var Todo= mongoose.model('Todo', sch);

//tells node to look for views and render them from view folder
app.set('view engine', ejs);

//telling node to serve static files from the public directory
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded());


    app.get('/', function(req,res){
        console.log('this is the get route'); 
        Todo.find({}, function(err, data){
            if(data){
                res.render("todo.ejs",{list:data});
            }
            else{
                res.redirect('/')
                console.log(err);
            }
        });
    });

    app.get('/delete/:id', function(req,res)
    {
        var id=req.params.id;
        Todo.findByIdAndDelete(id, function(data, err)
        {
            if(data)
                console.log(data);
            else
                console.log(err);
        })
        res.redirect('/');
    });

    
    app.post('/add', function(req,res)
    {   
        //console.log('this is the post route');
        //save the new todo to the database 
        if(req.body.listitem!="")
        {
           new Todo({item: req.body.listitem}).save();
        }
        res.redirect('/');
    });

  
app.listen(2000);
console.log("The server is listening at port 2000");