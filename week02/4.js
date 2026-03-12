//DAY-04 (class codes)
//object literal (obj vth out class in js)
/*const test ={
    a:10,
    getData:function(){}
}

class Student{
    //properties  //no need of let nd undefined by default
    #sno;  //private variable
    name;
    email;

    //constructor
    constructor(sno,name,email){
        //initialze obj
        this.#sno=sno;
        this.name=name;
        this.email=email;
    }

    //method
    getStudentName(){
        return this.name
    }

}
let std1=new Student(24,"Mani","manoharpatel.gmail.com") //constructor call
let std2=new Student(24,"Ravi","ravi.gmail.com")
console.log(std1.sno)//undefined

class Employee{
    #eno
    #ename
    constructor(eno,ename){
        this.#eno=eno
        this.#ename=ename
    }
    //instance method
    getData(){
        console.log("Employee name is : ",this.#ename,"and Id : ",this.#eno)
    }
    //static method
    static testMethod(){

        return this.test;
    }

}

let emp1=new Employee(101,'Ravi')
emp1.getData()

Employee.testMethod();
//obj literal 
let emp2={
    eno:201,
    ename:'nam',
    eadd:{
        city:'hyd',
        pin: 90
    }
}

//optional changing ? & nullish c   ??
const person={
    pid:100,
    name:'ravi'
}
console.log(person.pid)
console.log(person.name)
console.log(person.Marks)//undefined
//console.log(person.Marks.length)//TypeError: 
console.log(person.Marks?.length)//go to person obj and check if there is Marks in it
console.log(person.Marks?.length??"Marks not defined")//go to person obj and check if there is Marks in it
console.log(person.address?.city?.length)


//spread operator (create copies of arrays 7 objects )
let x=100
//create copy
let y=x//in mem y=100,x=100   x changes y does not get effected
//but in obj both are refering to object in heap mem  change reflects in both object's-> original and duplicated

let obj={a: 100}
let cpyObj=obj
obj.a=123
console.log(obj)
console.log(cpyObj)

//creating copy of object (using spread operator)  shallow copy

let originalObj={a: 10,b:20}
let copyObj={...originalObj}
originalObj.a=123
console.log(originalObj)
console.log(copyObj)

let originalArr=[10,2,3]
let copyArr=[...originalArr]
originalArr.pop()
console.log(originalArr)

//deep copy
let person1={name:'ravi',address:{city:"hyd"}}
//let cpyPerson1=structuredClone(person1)  or
let cpyPerson1=structuredClone(person1)
person1.address.city='wrngl'
person1.name='hasi'
console.log(person1)
console.log(cpyPerson1)

//add elements/prop while copying
let arr=[1,2,3]
let cpyarr=[...arr,4]
console.log(arr)
console.log(cpyarr)

let o={a:10}
let cpyo={...o,b:20}

//merge
let a1=[10,20]
let a2=[30,40]
let mergeda=[...a1,...a2]
console.log(mergeda)

//Rest parameter
function test(a,b){
    console.log(a,b)
}

test(100)//100 undefined
test(10,20,90)//10 20

function test1(...a){//considers n number of ele and binds in array
    console.log(a)
}

test1(100)//100 
test1(10,20,90)//10 20 30

function test2(...a,b){//SyntaxError: Rest parameter must be last formal parameter
    console.log(a,b)
}

test1(100)
test1(10,20,90)
function test2(a,...b){//SyntaxError: Rest parameter must be last formal parameter
    console.log(a,b)
}

test1(100)//100
test1(10,20,90)//10 [20,30]

function sumOf(...a){
    console.log(a)
    console.log("sum of elements is : ",a.reduce((a,b)=>a+b))
}
sumOf(10,10,10,10,10,10)

//destructuring(unpacking)

let arr=[10,20,30]
let [a,b,c]=arr//a=10,b=20,c=30

let emp={
    name:'hasi',
    sal:6000000,
    address:{
        city:'hyd',
        pin:909090
    }
}
let {name,sal,address:{city}}=emp
console.log(name,emp.name)

console.log("first")
for(let i=0;i<10000000000;i++){}
console.log("Second")
console.log("3rd")

console.log("first")
setTimeout(()=>{
    console.log("Task completed")
},5000)
console.log("Second")
console.log("3rd")


//timer function
// setTimeout(()=>{
//     console.log("After 3 seconds")
// },3000)

console.log("he'll")
setInterval(()=>{
    console.log("timer called")
},2000)//won't stop untl ctrl+c


//promise
// i'll call u in 5 min
//creation(creator/produce) consuming(consumer)

//creation of promise
console.log("Friend is waiting a call in 5 Seconds")
let futureCondition=true

const promiseObj=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(futureCondition===true)
    fulfilled("Promise fulfilled")
        else
    rejected("Promise rejected")
    },5000)
})
    console.log(promiseObj)
promiseObj
.then((msg)=>console.log(msg))
.catch((err)=>console.log("Error : ",msg))
j

//i'll send 10k by tommorow

console.log("Send 10k to friend")
let cashAvailable=false
const prom = new Promise((a,b)=>{
    setTimeout(()=>{
        if(cashAvailable)
            a("Payment Successful")
        else
            b("Insufficient bank balance")
    },1000)
})
console.log(prom)

prom.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
*/

//Examples of prom 

//Make api req
fetch('https://jsonplaceholder.typicode.com/posts')//time req is unpredictable
.then(res=>res.json())
.then(res=>console.log("res is ",res))
.catch(err=>console.log("Error : ",err))
//hash a pass
//creating tokens
//database / HTTP libraries

//files & stream APIs
