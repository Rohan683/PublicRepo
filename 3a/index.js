const express=require('express');
const port=8000;
const app=express();
const path=require('path');

app.set('view engine','ejs');         //setting view part
app.set('views',path.join(__dirname,'views'));            
app.use(express.urlencoded());  


app.get('/',function(req,res){
    return res.send("hello");
})


app.get('/data',function(req,res){
    return res.render('hello',{
        title:"Rendered file"

    })
})

app.listen(port,function(err){
    if(err){
        console.log(`Error in firing up the server: ${err}`);
    }
    else{
        console.log(`Server is up on port: ${port}`);
    }
})
