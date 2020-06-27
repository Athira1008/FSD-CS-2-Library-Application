const express= require ('express');
const admin0Router =express.Router();
const Authordata=require('../model/Authordata');

// To add authors
admin0Router.get('/',function(req,res){
    res.render("addauthor",{
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
      
       title:'Library Management Website-Add Author',
       heading:'Add Author',
    
    });
});

admin0Router.post('/addauthor',function(req,res){
    var details={
        name:req.body.name,
        website:req.body.website,
        description:req.body.description,
        image:req.body.image
    }
    var author=Authordata(details);
    // to save data to db
    author.save();
    res.redirect('/authors');
});
module.exports =admin0Router;