const express= require ('express');
const authorsRouter =express.Router();
const Authordata=require('../model/Authordata');

   authorsRouter.get('/',function(req,res){
      Authordata.find()
      .then(function(authors){
        res.render("authors",{
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
            
             title:'Library Management Website-Authors',
             heading:'Authors',
             authors
          });
      });
 });

//  to delete author data
 authorsRouter.get('/delete/:id',function(req,res){
    Authordata.deleteOne({_id:req.params.id})
    .then(function(authors){
        
        res.redirect('/authors')
        authors
    }); 
});

// to get single author

authorsRouter.get('/:id',function(req,res){
    const id =req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
       res.render("author",{
           nav:[
               {
                   link:'/index',name:'Home'
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
                   link:'/admin',name:'Add Author'
               },
               {
                   link:'/index',name:'Logout'
               }
           ],
           
            title:'Library Management Website-Author',
            heading:'Author',
            author
         });
    });
    
});

module.exports=authorsRouter;