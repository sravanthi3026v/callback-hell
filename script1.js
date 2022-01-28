// function callbackfunction(name){
//     console.log( name );
// }
// function outerFunction(show){
//     let name = prompt("Enter your name");
//     show(name);
// }
// outerFunction(callbackfunction);
 

// function myfun1(){
//     setTimeout(() => {
//         console.log("this is intial call");
//             } , 2000);
// }
// function myfun2(){
//     console.log("this is secondary call");
// }
// myfun1();
// myfun2();

// let compute=(n1,n2,res)=>res(n1,n2);
// let add=(n1,n2)=>n1+n2;
// let div=(n1,n2)=>n1/n2;
// let mul=(n1,n2)=>n1*n2;
// console.log(compute(5,4,add));
// console.log(compute(5,4,div));
// console.log(compute(5,4,mul));

// function one(name){
//     console.log(name.toUpperCase());
// }
// function two(name){
//     console.log(name.split("").reverse().join(""));
// }
// function three(name,mycallback){
// mycallback(name);
// }
// three("sravanthi",one);
// three("sravanthi",two);

// function myfun(){
//     setTimeout(()=>{
// let arr=["banana", "apple","orange","grape","kiwi"];
//     callback(false,arr);
// },3000);
// }
// function callback(err,arr){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(arr);
//     }
// }
// myfun(callback);


let countdown = document.querySelector(".countdown");
let time = 5;
countdown.innerText = time--;
setTimeout(()=>{
    countdown.innerText=time--;
setTimeout(()=>{
    countdown.innerText=time--;
setTimeout(()=>{
    countdown.innerText=time--;
    setTimeout(()=>{
        countdown.innerText=time--;
        setTimeout(()=>{
            countdown.innerText="Happy Republic Day";
        },1000);
    },1000);
},1000);
},1000);
},1000);