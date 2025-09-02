let input=document.getElementById("input");
let para=document.getElementById("para");
function diceroll(){
    let myimgtag=document.getElementById("randomimg");
    // input.textContent=input.value;
    let myimgarr=[];

for(let i=0;i<input.value;i++){
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    myimgarr.push(`<img src=0${randomNumber}.png alt=${randomNumber} height=50 width=50>`) 
    // console.log(randomNumber)

}    
myimgtag.innerHTML=myimgarr.join("");
}