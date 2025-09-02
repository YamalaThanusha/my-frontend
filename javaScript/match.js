let input=document.getElementById("input");
let para=document.getElementById("para");
let randomNumber = Math.floor(Math.random() * 10) + 1; 
document.getElementById("random-number").textContent = randomNumber;
function generateRandomNumber() {
   if(input==randomNumber){
     para.textContent="This number equals"
    }else if(input>=randomNumber){
        para.textContent="greater"
    }
    else {
        para.textContent="lesser"
    }
}