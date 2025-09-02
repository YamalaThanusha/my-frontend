let input=document.getElementById("input");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let input3=document.getElementById("input3");



let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");


let button=document.querySelector("button");
button.addEventListener("click", function(e) {
    e.preventDefault(); 
    fname.textContent = "First Name: " + input.value;
    lname.textContent = "Last Name: " + input1.value;
    email.textContent = "Email: " + input2.value;
    password.textContent = "Password: " + input3.value;

    // console.log("First Name:", input.value);
    // console.log("Last Name:", input1.value);
    // console.log("Email:", input2.value);
    // console.log("Password:", input3.value);

});
// mybtn.addEventListener("click",mufun);
// button.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("hello");
// });



// function myfun(e){
// console.log("Testing");
// e.preventDefault();
// }
// button.addEventListener("click",myfun);



// button.onclick=(e)=>{
//     e.preventDefault();
//     console.log("Testing");
// }



// button.onclick=(e)=>{
//     e.preventDefault();
//     console.log("Testing");
// }
// button.onclick=myfun;