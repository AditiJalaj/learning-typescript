// function add(n1:number,n2:number,show){
//     if(showIt){
//         console.log(n1+n2)
//     }
//     return n1+n2

// }


// const number1=5
// const number2=4
// const showIt=true
// const res=add(number1,number2,showIt)
// console.log(res)


//objects 
// const ob:{
//     name:string;
//     age:number
// }={
//     name:"Zditi",
//     age:23
// }


// console.log(ob.age)


//ARRAYS
// const arr1:(string|number)[]=['aditi','jalaj','err',1]

// for(const item of arr1){
//     console.log(item)
    
// }


//TUPLE
// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string]
// }={
//     name:'aditi',
//     age:23,
//     hobbies:['eat','sleep'],
//     role:[2,'cute']
// }


// person.role.push('jenny') //push to tuple IS ALLOWED -> EXCEPTION
// // person.role=[3,'jenny'] //IS ALLOWED AS SAME LENGTH AND SAME TYPE

// // person.role=[10,'anni','kumari'] //NOT ALLOWD

// console.log(person.role)



// //ENUM
// // enum Role {ADMIN,AGE,PLACE}

// // console.log(Role.ADMIN)  //op - 0
// // console.log(Role.PLACE)  //2


// enum Diff { ONE,TWO=3,THREE=5, FOUR}
// console.log(Diff.ONE)  //0 
// console.log(Diff.TWO)   //3
// console.log(Diff.THREE)   //5
// console.log(Diff.FOUR)   //6



//ANY TYPE
const anyArray:any[]=['this will take array of any values']
console.log(anyArray)

const anything:any='string_34'
console.log(anything)

const anyObject:any{}='string'
console.log(anyObject)  //undefined



//ERROR
// let anyObject:any{}
// anyObject={
//     name:"aditi"
// }
// console.log(anyObject)
