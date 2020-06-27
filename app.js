const express= require ('express');
const exitRouter=express.Router();
// init express
const app =new express();

// global navbar
const nav= [
    {
        link:'/',name:'Home'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    }
];

// to access Router

const loginRouter=require('./src/routes/loginRoutes')(nav);
const booksRouter=require('./src/routes/bookRoutes');
const signupRouter=require('./src/routes/signupRoutes')(nav);
const authorsRouter=require('./src/routes/authorsRoutes');
const adminRouter=require('./src/routes/adminRoutes');
const admin0Router=require('./src/routes/admin0Routes');
const updateRouter=require('./src/routes/updateRoutes');



app.use(express.urlencoded({extended:true}));
// serving static files
app.use(express.static('./Public'));

// setting view engine
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/login',loginRouter);
app.use('/books',booksRouter);
app.use('/signup',signupRouter);
app.use('/authors',authorsRouter);
app.use('/index',exitRouter);
app.use('/admin',adminRouter);
app.use('/admin0',admin0Router);
app.use('/update',updateRouter);

// create  end points/route handless

app.get('/',function(req,res){
res.render("index",
{   nav,
    title:'Library Management Website-Home',
    heading:'Library',
    list:[
        {
            title:'10 Projects to Get You to Your First Dev Job in 2020',
            website:'https://www.sitepoint.com/',
            time:'24 March 2020',
            img:"1.jpg"
    
        },
        {
            title:'Exciting New Tools For Designers',
            website:'https://www.webdesignerdepot.com/',
            time:'7 Days Ago',
            img:"2.jpeg"
        },
        {
            title:'40+ Web Tools & Services You Should Check Out for 2020',
            website:'https://designshack.net/',
            time:'19 Feb 2020',
            img:"3.jpg"
        }
    ]
});
});

exitRouter.get('/',function(req,res){
    res.render("index",
    {   nav,
        title:'Library Management Website-Home',
        heading:'Library',
        list:[
            {
                title:'10 Projects to Get You to Your First Dev Job in 2020',
                website:'https://www.sitepoint.com/',
                time:'24 March 2020',
                img:"1.jpg"
        
            },
            {
                title:'Exciting New Tools For Designers',
                website:'https://www.webdesignerdepot.com/',
                time:'7 Days Ago',
                img:"2.jpeg"
            },
            {
                title:'40+ Web Tools & Services You Should Check Out for 2020',
                website:'https://designshack.net/',
                time:'19 Feb 2020',
                img:"3.jpg"
            }
        ]
    });
    });
app.listen(5000);