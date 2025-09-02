let ele=document.getElementsByClassName("para");
console.log(ele);
ele[0].style.backgroundColor="pink";

let myimg=document.createElement("img");
myimg.src="download1.jpeg";
myimg.alt="Image";
myimg.height=200;
myimg.width=200;
console.log("myimg");
let mybody=document.getElementsByTagName("body");
mybody[0].appendChild(myimg);
