const express=require("express");
const app=express();
app.use(express.json());
const users=[{
    name:'john',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]
app.get('/',(req,res)=>{
    const johnKidneys=users[0].kidneys;
    const noOfKidneys=johnKidneys.length;
    let healthyKidneys=0;
    let unhealthyKidneys=0;
    for(let i=0;i<noOfKidneys;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys++;
        }
        else{
            unhealthyKidneys++;
        }
    }
    res.send({
        noOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})
app.post('/',(req,res)=>{
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        "msg":"done!"
    })
})
app.put("/",(req,res)=>{
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
} )
app.delete("/",(req,res)=>{
    if(isThereBadKidney()){
        const newKidneys=[];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }   
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg:"done!"
    })
} else{
    res.status(411).json({
        msg:"you have no bad kidneys."
    })
}

})
function isThereBadKidney(){
    let badKidneyExist=false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            badKidneyExist=true;
            }
        }
        return badKidneyExist;
}
app.listen(3000,()=>{
    console.log("listening on port 3000");
})