// //UNION TYPES - ß
// const combine=(n1:number|string,n2:number|string)=>{
//     if(typeof n1==='number' && typeof n2==='number' ){
//         return n1+n2
//     }
//     else{
//         return n1.toString()+n2.toString()
//     }
// }
// const result=combine('aditi',23)
// console.log(result)
// //LITERAL TYPE
// function combineEm(n1:number,n2:number,result:'aditi'|'jalaj'){
//     return n1+n2+result
// }
// console.log(combineEm(2,3,'jalaj'))  //PERFECT
// console.log(combineEm(2,3,'jal'))  //ERROR as type jal not assignable to parameter of type 'aditi' or 'jalaj'
//TYPE ALIAS
// type Combined=number| string;
// function add(n1:Combined,n2:Combined){
//     return +n1 + +n2;
// }
// const res=add(2,'aditi')
// console.log(`res is ${res}`) //output NaN as we did +string -which gave NaN
// const res2=add(3,4)
// console.log(`result is ${res2}`)
// console.log(+'aditi') //NaN
//-------------------------
//FUNCTION RETURN TYPES AND VOID
// function adding(n1:number,n2:number):string{
//     return n1.toString()+n2.toString()
// }
// //void- below function has void return type as it is not returning any value , it's just a console log
// function printResult(num){
//     console.log(`the result is ${num}`)
// }
// printResult(adding(4,5))
// function subtract(n1:number,n2:number){
//     return n1-n2
// }
// //but if you console.log(printResult(subtract(3,4)))-> you get undefined , as it's the console.log for void return type
// console.log(printResult(subtract(3,4))) //undefined
// //NOTE- a function whose declared type is neither 'void' nor 'any' must return a value.
// //so below return with undefined must have return;
// function random(s:string):undefined{
//     console.log(s)
//     return;
// }
// console.log(random("Aditi")) //op id Aditi and undefined
//----------------------------------
//FUNCTION TYPES
// const printResult=(n1:string|number)=>{
//     return `Result is ${n1}`
// }
// let printFn:Function;
// printFn=printResult
// console.log(printFn(5))
// let newFn:()=>number; //means this newFn function does not take any args and return type number
// let newnewFn:(a:number,b:number)=>number 
// const nF=(a:string,b:string)=>{
//     return a+b
// }
// console.log(nF('aditi','jalaj'))
//CALLBACKS
var withCb = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
// const ccb=(n:number)=>{
//     return n*2
// }
var ccb = function (res) {
    console.log(res);
};
console.log(withCb(2, 3, ccb(89)));
