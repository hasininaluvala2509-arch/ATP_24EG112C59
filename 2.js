/*
//functions are first class objects in js 
//because it can be stored in var
//it can return another function
// it can receive a fun as arg


let test = function(){
    console.log(100)
}

console.log(test())
let result = test();

let test1=function(){
 return 100
}

 let result1=test1()
 console.log(result1)

 let test2=function(){
 return function(){
    return 200
 }
}

 let result2=test2()
 console.log(result2())
 

 let createGame1=function(level,nameOfPlayer)
 {
    console.log(`Hello ${nameOfPlayer} , you are at level ${level}`)
 }

 createGame1(1,'Ravi')


//best version (reusable i.e create any number of levels)

 let createGame=function(nameOfPlayer)
 {
    return function(level){
    console.log(`Hello ${nameOfPlayer} , you are at level ${level}`)
    }
 }

 let createLevel=createGame('ravi')
 createLevel(1)
 createLevel(2)
 createLevel(3)

 let createLevel1=createGame('Suresh')
 createLevel1(4)
 createLevel1(5)
 createLevel1(6)
 

 let test3= function(a){
    console.log(a)
 }

 test3(10)
 test3("Hello")
 test3([1,2,3])
 test3(function(){})

 
//call back function is a function that calls another function

 let makePayment= function(amount,paymentType){

    console.log(`payment of ${amount} started`)
    paymentType()
 }

 let UPIPayment=function(){
    console.log(`UPI payment done`)
 }
  
 let CardPayment = function(){
    console.log(`Card payment done`)
 }
 makePayment(2000,UPIPayment)  //function is called by application
 makePayment(2000,CardPayment)


let sum = function(x){
    return function(y){
        return x+y
    }
}
let res=sum(10)     //x created x=10 then after completion then x is removed
console.log(res(20))// expected x is not defined
//my theory  :  sum(10) is stored in res i.e variable res is again called in console i.e it contains sum(10) i.e x = 10 again 
//in js functions are given an extra power called closure (when function called another function)
//stores x in heap mem as x is required in inside function 

let a=10; //global scope // stay in mem until prg execution is completed

function test4(){
    //function scope
    let b = 20;  // stay in mem until fun execution is completed
    if(true){
        c=30;//block scope
    }
}


//Array
let marks=[90,80,70,60]   //marks is the referance of array not name of array
//first ele 90 is at a distance 0 from starting ele (90)  index theory
let names=['ravi','bhanu','vikas']

console.log(marks[10])
//iterate an array
for(let v of marks)
{
   console.log(v)
}
*/
//object
let student={
   sno:59,        //sno is key always string & value may be any thing
   name:'hasi',   //property
   age:19,
   course:"B Tech"
}

//console.log(student)

//console.log(student.name)
//console.log(student[`name`])
//console.log(student.city)  //undefined

//Iterate an object(for in loop)
//arrays have index (ordered collection)
//object do not have index (unorderd collection)
for(let v in student){
   //console.log(v)        //receives key not value
   //console.log(student.v) //undefined
   //console.log(student[v]) 
  //console.log(`${v} is ${student[v]}`) 
}
/*


//array of objects

let emps=[
   {eno:1,name:'bhanu'},
   {eno:2,name:'ravi'},
   {eno:3,name:'vani'}
]

for(let v of emps)
{
   console.log(`eno is ${v.eno} name is ${v.name}`)
}

for(let v of emps)
{
   for(let w in v)
   console.log(`${w} is ${v[w]} `)
}


let stu={
   rollno:1,
   firstName: "Bhanu",
   lastname : " Rao",
   marks : [90,90,90],
   address:{
      city: "hyd",
      pincode: 500088
   },
getFullName:function(){
   //return firstName+lastname         (ERROR firstName undefined)

   return this.firstName+this.lastname
   //it searches for firstName & lastName outside of the object
   //this refers to current object
},//methods placed as members of object
getAverageMarks:function(){
   let sum=0
   for(let i of this.marks)
      sum+=i
   return sum/this.marks.length
} 
}

//let getFullName=function(){}
//let getAverageMarks=function(){} 
 // working on the stu data so right place for these is inside the object i.e members of obj
 console.log(stu.getFullName())
 console.log(`Avg marks of ${stu.getFullName()} is ${stu.getAverageMarks()}`)

let testArray=[10,20,30]

//dynamic insertion
  //end
  testArray.push(40)
  console.log(testArray)

  //starting
  testArray.unshift(1)
  console.log(testArray)

  //in between (index based insertion)
  testArray.splice(2,0,123)//index based insertion , deletion also updation
  console.log(testArray)
 
//dynamic deletion
//atmost removes one element
  //starting
   console.log(testArray.shift())
   console.log(testArray)
  //end
   let removedEle = testArray.pop()
   console.log(testArray)
   console.log(removedEle)

  //in between(index based)
   testArray.splice(2,1)//remove one ele from 2nd index
   console.log(testArray)  
    testArray.splice(1,3)//remove one ele from 2nd index
   console.log(testArray) 
*/
let testArray=[10,20,30]
   console.log(testArray) 

   //dynamic update
   testArray.splice(2,2,2,23)// adds ele 23 at index 2
   console.log(testArray) 

