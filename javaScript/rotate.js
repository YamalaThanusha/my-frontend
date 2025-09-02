let left=document.getElementById("left");
let card=document.getElementsByClassName("card")


function hello(direction){
    let randomNumber=Math.floor(Math.random() *6);
 console.log(randomNumber)
   if(direction=='left'){
   // card[randomNumber].style.backgroundColor="red";
   card[randomNumber].style.transform = "rotate(-360deg)";
   }
   else if(direction=='right'){
   
      card[randomNumber].style.transform = "rotate(360deg)";
   }

}
