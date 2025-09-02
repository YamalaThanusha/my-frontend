// function myfun(){
//     let mypa=document.getElementById("mypara1");
//     mypa.textContent="hello"
// // console.log("testing");
// }

let mypa=document.getElementById("mypara1");

function myfun(){
    let newpara=document.createElement("p")
    newpara.textContent="Hello";
    mypara1.appendChild(newpara);
}


// let minRange=50;
// let maxRange=100;
// function myfun(){
//     let mynumber=Math.floor(Math.random()*(maxRange-minRange)+minRange)
//     console.log(mynumber);
//         let newpara=document.createElement("p")
//         newpara.textContent="Hello" +mynumber;
//         mypara1.appendChild(newpara);
//     }