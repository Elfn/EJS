var express = require('express');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var cors = require('cors');
var path = require('path');

var app = express();

//bodyParser extract the entire body portion of an incoming request stream and exposes it on req.body
app.use(bodyParser());

app.use(cors());

app.use(expressLayouts);

//Here we are using 'path' package to get the current directory path
//And join it with the views directory to create a full path to the views directory 
//to use for this application
app.set('views', path.join(__dirname, 'views'));

//Set the application's view engine to ejs
app.set('view engine', 'ejs');

//Entry point which redirect to index ejs's page
//Here we passed one value
// app.get('/',function(req,res){
//         res.render('index',{
//                 val: 'Elimane'
//         });
// });

//Now we are passing an array
    app.get('/',function(req,res){
                res.render('index',{
                        persons: [{name:'Doe'},{name:'Tiger'}]
                });
        });


    app.get('/about',function(req,res){
        res.render('about');
        });

    // app.get('/layout',function(req,res){
    //     res.render('layout');
    //     });

app.listen(8000,function(){
    console.log('Server is listening on 8000...');
});



