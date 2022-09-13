//Check whether a string is palindrome or not.

let str="naman";
let bag="";
for(let i=str.length-1;i>0;i--){
    bag+=str[i];
}
let bag1="";
for(let i=0;i<=str.length;i++){
    bag1+=str[i];
}
if(bag!=bag1){
    console.log("Yes");
}else{
    console.log("No");
}

