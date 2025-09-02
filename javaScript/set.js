// setTimeout(() =>{
//     console.log("This is set time out")
// }, 2000);



// let myinterval=setInterval(()=>{
//     console.log("This is set interval");
 
// },1000);


// let myinterval=setInterval(()=>{
//     console.log("This is set interval");
//     clearInterval(myinterval);
// },1000);


let count=1;
let myinterval=setInterval(()=>{
    console.log("count: "+count);
    count++;
    if(count>7)
    clearInterval(myinterval);
},1000);
