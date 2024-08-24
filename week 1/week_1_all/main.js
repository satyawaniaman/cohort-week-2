//test command for terminal if you have test written 
// npx jest ./tests/(path name) 





//console.log("hell yeah!");
// const user1={name:"aman",
//     gender:"male"
// }
// console.log(user1["gender"]);

// const users =[
// {name:"aman",age:21},
// {name:"raman",age:24},
// {name:"naman",age:27}
// ];
// for (let index = 0; index < users.length; index++) {
//     if(users[index]["age"]<22){//["age"] and .age both works same
//         console.log(users[index].name);
//     }
    
// }

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,5));  

// let sum=0;
// for (let index = 0; index < 10000000000; index++) {
//     sum+=index;
// }
// console.log(sum);

// function sum(a,b,fnToCall){
//     return fnToCall(a+b);
// } 
// function display(data){
//     console.log(data);
// }
// sum(1,5,display);
//callbacks 
//another example 
// function greet(){
//     console.log("hello aman")
// }
// function calcTime(){
//     const before=performance.now();
//     setTimeout(greet,3*1000)
//     const after= performance.now();
//     console.log("before "+before+" after "+after);
// }
// calcTime();
// function measureDelay() {
//     const startTime = performance.now();
//     setTimeout(() => {
//       const endTime = performance.now();
//       const elapsedTime = endTime - startTime;
//       console.log(`Actual delay: ${elapsedTime} milliseconds`);
//     }, 3000); // Desired delay
//   }
  
//   measureDelay();
// str= ("aman");
// console.log(str.indexOf("a"));
// const fs =require("fs")
// fs.readFile("main.txt","utf-8",function(err,data){
//     console.log(data);
// })
// const fs=require("fs");
// fs.readFile('main.txt','utf-8',(err,data)=>{
//         console.log(data)
// })
// let a=0;
// for (let i = 0; i < 1000000; i++) {
//     a+=1;
// }
// console.log("hello aman");
// console.log(a)
// const fs=require("fs");
// function async(cb){
//     fs.readFile('main.txt','utf-8',(err,data)=>{
//         cb(data)
//     })
// }

// function readData(data){
//     console.log(data)
// }
// async(readData)

//  const fs=require("fs");
// const { resolve } = require("path");
// fs.readFile('main.txt','utf-8',(err,data)=>{
//         console.log(data)
// })

// function async2(){
//     return new Promise(function(resolve){
//         fs.readFile('main.txt','utf-8',(err,data)=>{
//             resolve(data)
//     })
//   })
// }
//   // callback function to call
//   function onDone(data) {
//     console.log(data)
//   }
  
//   async2().then(onDone);

// let p= new Promise(function(resolve){
//     resolve("hi there")
// })
// p.then(function(){
//     console.log(p);
// })
// p.then(console.log(p))

function async3(){
    let p=new Promise(function(resolve){
        resolve("hi there")
    })
    return p;
}
async function main() {
    const value= await async3();
    console.log(value);
}
main();

function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    })
    return p;
  }
  
  async function main2() {
    const value = await kiratsAsyncFunction();
    console.log(value);
  }
  
  main2();
