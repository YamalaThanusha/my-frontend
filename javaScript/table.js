// let body=document.getElementsByTagName("body")[0];
// function myfun(){
//     let input=document.getElementById("input");
//     let table=document.createElement("table");

//     for(let i=1;i<=input.value;i++){
//         let row=document.createElement("tr");
//         table.appendChild(row);

//     for(let j=1;j<=input.value;j++){
//         let data=document.createElement("td");
//         row.appendChild(data);
//     }
// }
// body.appendChild(table);
// }




let body=document.getElementsByTagName("body")[0];
function myfun(){
    let input=document.getElementById("input");
    let table=document.createElement("table");

    for(let i=1;i<=input.value;i++){
        let row=document.createElement("tr");
        table.appendChild(row);

    for(let j=1;j<=input.value;j++){
        let data=document.createElement("td");
        row.appendChild(data);
        data.addEventListener("click", function () {
        let random = Math.floor(Math.random() * 100);
        data.innerText = random;
        });
    }
}
body.appendChild(table);
}






// let container=document.getElementsByClassName("container")[0];
// function myfun(){
//     let input=document.getElementById("input");
//     let table=document.createElement("table");

//     for(let i=1;i<=input.value;i++){
//         let row=document.createElement("tr");
//         table.appendChild(row);

//     for(let j=1;j<=input.value;j++){
//         let data=document.createElement("td");
//         row.appendChild(data);
//         data.addEventListener("click", function () {
//             let r = Math.floor(Math.random() * 256);
//             let g = Math.floor(Math.random() * 256);
//             let b = Math.floor(Math.random() * 256);
//             data.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//         });
//     }
// }
// container.appendChild(table);
// }