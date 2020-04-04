const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geoCode =require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
 const app=express();
 
 const pathDirectory=path.join(__dirname,'../public');
 const pathViews=path.join(__dirname,'../templates/views');
 const pathPartials=path.join(__dirname,'../templates/partials');
 app.use(express.static(pathDirectory));
 app.set('view engine','hbs')
 app.set('views',pathViews)
 hbs.registerPartials(pathPartials)

 app.get('',(req,res)=>{
     res.render('index',{
         name:'Quan Phung'
     });
 })
 app.get('/help',(req,res)=>{
    res.render('help',{
        name:'Quan Phung'
    });
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name:'Quan Phung'
    });
})
app.get('/about',(req,res)=>{
    res.render('about',{
        name:'Quan Phung'
    });
})
app.get('/weather',(req,res)=>{
    if(!req.query.addr)
    {
        return res.send({
            error:"you need query address"
        });
    }
    geoCode(req.query.addr,(err,{latitude,longtitude,location})=>{
        if(err){
            return res.send({err})
            
        }
        forecast(latitude,longtitude,(err,{temp,hummid})=>{
            if(err)
            {
                return res.send({err})
            }
            else 
            {
                res.send({
                    location:location,
                    temp,
                    hummid
                })
            }
        })
    })

});
app.get('/products',(req,res)=>{
    if(!req.query.search)
    {
       return res.send({
            error:'you have to devide search',
            name:'Quan Phung'
        })
    }
    console.log(req.query);
    res.send({
        products:[]
    })
})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        tittle:'No found recomended'
        
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        tittle:'Error 404'

    })
})
 app.listen(3000);
  