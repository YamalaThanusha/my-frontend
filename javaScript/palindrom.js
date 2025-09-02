
let a=131;
let rev=0;
let t=a;
while(a>0){
     rev=rev*10+a%10;
     a=a/10|0;
}
if(rev==t){
    console.log("True");
}else{
    console.log("False");
}

