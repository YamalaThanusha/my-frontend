let para1=document.getElementById("quote");
let array=["Love deeply, live simply.",
"Be someone's rainbow today.",
"Kindness is always fashionable.",
"You are enough. Believe it.",
"Create your own sunshine always.",
"Love wins, always and forever.",
"Life is too short, be happy.",
"Dream big, work hard, succeed.",
"Character is power."];
function myfun(){

    let random = Math.floor(Math.random() * array.length);
    para1.textContent = array[random];

 }
 let para2=document.getElementsByTagName("body")[0];
 let para3=document.getElementsByTagName("button")[0];
 para1.style.color = "black";
//  para1.style.border="3px solid crimson";
 para1.style.fontSize = "24px";
 para1.style.fontWeight = "bold";
 para1.style.fontFamily = "cursive";
//  para1.style.backgroundColor = "crimson";
//  para1.style.borderRadius = "10px";
//  para2.style.backgroundColor="pink";
para1.style.display="flex";
para1.style.alignItems="center";
para1.style.justifyContent="center";
 para3.style.border="3px solid #19592e";
 para3.style.padding="8px";
 para3.style.fontSize = "20px";
 para3.style.fontWeight = "bold";
 para3.style.fontStyle = "cursive";
 para3.style.color = "white";
 para3.style.backgroundColor = "#19592e";
 para3.style.borderRadius = "10px";
 para3.style.cursor="pointer";
 para3.style.position="absolute";
 para3.style.top="60%";
 para3.style.left="47%";

 para1.style.position="absolute";
 para1.style.top="35%";
 para1.style.left="38%";
 para1.style.padding="5px";
//  para1.style.width="25%";

