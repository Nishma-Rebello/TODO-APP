
const { response } = require('express');
const Todo=require('../app');
module.exports=function(app)
{
    var data=['say bye', 'say hello'];
    
    app.get('/', function(req,res)
    {
      res.send('home page');   
    });

    app.get('/todo', function(req,res)
    {
        var nishma=req.body;
        res.render("todo.ejs", {list:data, qs: req.query});
        
    });

    app.post('/todo', function(req,res)
    {   
        // const todoBody= {
        //     item: req.query.body
        //   };
        // const newTodo = new Todo (todoBody);
        // newTodo.save().then((response)=>{
        //     console.log(response);
        //     res.send('you have hit the post route');
        // }).catch((error)=>{
        //     console.log(error);
        //     res.send(error);
        // });

        var newItem=new Todo({
            item: 'HDSDASDS'
        });
        newItem.save();
       
        //return res.send('you have hit the post route');
    });

    app.delete('/todo', function(req,res)
    {
        
    });

}