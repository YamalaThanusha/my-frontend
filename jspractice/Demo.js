
        // let a=12;
        // let b=13;
        // let c=a+b;
        // console.log(c);


        // function myfun(a,b){
        //     c=a+b;
        //     console.log(c)
        // }
        // myfun(10,13);



    //  let array=[50,34,56,24,60,67];
    //  console.log(Math.min(...array)); 

//    let array=[1,2,3,4,5,6,7,8,9,10];
//    let arr=[];
//    for(let i=0;i<=10;i++){
   
//    if(array[i]%2==0){
//     arr=array[i];
//     console.log(arr);

//    }
//    }





// let a = "Thanusha";
// let b = a.split('');
// console.log(b);
// let c = "JavaScript";
// let d = c.split('').reverse();
// console.log(d);
// let s = "Anitha";
// let t = s.split('').reverse().join('');
// console.log(t);




// function myfun(){
//     let array=[23,78,54,90,123,654,9];
//     let largest=array[0];
//     for (let i=1;i<array.length;i++){
//         if(array[i]>largest){
//             largest =array[i];
//         }
//     }
//   console.log(largest); 
// }

// let array=[23,65,35,355];
// let arr= array.slice(2); //upto that element
// console.log(arr);



function myfun(){
    let array=[23,78,54,90,123,654,9];
    let sum=0;
    for (let i=0;i<array.length;i++){
        sum+=array[i];
        
    }
    console.log(sum);  
}
myfun()