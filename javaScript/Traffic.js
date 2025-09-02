// function myfun(id,color){
//     document.getElementById("main11").style.backgroundColor="";
//     document.getElementById("main21").style.backgroundColor="";
//     document.getElementById("main31").style.backgroundColor="";
//     document.getElementById(id).style.backgroundColor=color;
// }
             
            
function myfun(led){
    if(led=="r1"){
        p1.style.backgroundColor="red";
        p2.style.backgroundColor="white";
        p3.style.backgroundColor="white";
    }
    else if(led=="y1"){
        p1.style.backgroundColor="white";
        p2.style.backgroundColor="yellow";
        p3.style.backgroundColor="white";
    }
    else{
        p1.style.backgroundColor="white";
        p2.style.backgroundColor="white";
        p3.style.backgroundColor="green";
    }
}