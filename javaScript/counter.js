let para1=document.getElementById("para");
let count=0;
// function add(){
//         if(count>=0 && count<20){
//         count++;}
//         else{
//           alert("Exceeding");
//         }
//         para1.textContent=count;
          
// }
// function dec(){
//     if(count>0 && count<20){
//         count--;}
//         else{
//             alert("out of zero");}
    
//         para1.textContent=count; 
          
// }
// function reset(){
//         count=0;
//         para1.textContent=count;
//     }





function myfun(value){
    if(value=='inc'){
        if(count>=0 && count<20){
            count++;}
        else{
            alert("Exceeding");
            }
    }
    else if(value=='dec'){
        if(count>0 && count<=20){
            count--;}
        else{
            alert("out of zero");}
    }
    else{
        count=0;
    }
    para1.textContent=count;
}
