const express= require ('express');
const booksRouter =express.Router();
const Bookdata=require('../model/Bookdata');

booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
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
                
                 title:'Library Management Website-Books',
                 heading:'Books',
                 books
        
              });
        });
        
   });

//    to delete a record
booksRouter.get('/delete/:id',function(req,res){
    Bookdata.deleteOne({_id:req.params.id})
    .then(function(books){
        
        res.redirect('/books')
        books
    }); 
});

// to get single book
booksRouter.get('/:id',function(req,res){
     const id =req.params.id;
     Bookdata.findOne({_id:id})
     .then(function(book){
        res.render("book",{
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
            
             title:'Library Management Website-Book',
             heading:'Book',
             book
          });
     });
     
 });


//  to update a document

booksRouter.get('/update/:id',function(req,res){
    const id =req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(updatebook){
       res.render("updatebook",{
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
                   link:'/admin0',name:'Add Author'
               },
               {
                   link:'/index',name:'Logout'
               }
           ],
           
            title:'Library Management Website-Update Book',
            heading:'Update Book',
            updatebook
         });
    });
    
});

 
module.exports =booksRouter;