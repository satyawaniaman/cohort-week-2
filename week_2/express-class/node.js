 const express=require("express")
 const app=express();
 app.listen(3000,()=>{
    console.log("server is set")
 });
app.get('/',(req,res)=>{
    const n=req.query.age;
    if(n){
        res.send("your age in days: "+ageInDays(n));
    }
    else{
        res.send("enter valid query parameter");
    }
})
function ageInDays(n){
    const age=Number(n);
    if(isNaN(age)){
        return "invalid age provided";
    }
    else{
        return age*365;
    }
}