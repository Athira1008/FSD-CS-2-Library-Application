const express= require ('express');
const adminRouter =express.Router();
const Bookdata=require('../model/Bookdata');


    adminRouter.get('/',function(req,res){
        res.render("addbook",{
          nav:[
              {
                  link:'/',name:'Home'
              },
              {
                  link:'/books',name:'Books'
              },
              {
                  link:'/authors',name:'Authors'
              },
              {
                link:'/admin',name:'Add Book'
              },
              {
                link:'/admin0',name:'Add Author'
              },
              
              {
                  link:'/index',name:'Logout'
              }
          ],
          
           title:'Library Management Website-Add Book',
           heading:'Add Book',
        
        });
   });

 adminRouter.post('/add',function(req,res){
    var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
    }
    var book=Bookdata(item);
    // to save data to db
    book.save();
    res.redirect('/books');
});


module.exports =adminRouter;
