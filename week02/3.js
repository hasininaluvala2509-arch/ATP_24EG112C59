//DAY-03 (class codes)
let person ={
    name :'ravi',
    age: 19
}

//adding new property 
person.city='hyd'
//console.log(person)

//update a property  obj is not index based so no insertion at end or start or middle wt ever
person.name='bhanu'
//console.log(person)

//delete a property
delete person.name
//console.log(person)

let testData = [90,45,-12,65,73]
console.log(testData)

//filter(selection)   taking only required things only
    // ele > 30
/*          without filter method
let result =[]
for(let ele of testData){
    if(ele>30)
        result.push(ele)
}
console.log(result)*/

let r=testData.filter(function(element){
    return element>30
})
//console.log(r)

//arrow function

let r1= testData.filter((element) => element>30)
//console.log(r1)

//get ele between 40 and 80
let r2= testData.filter(element=> element>=40 && element<=80)
//console.log(r2)

let r3=testData.filter(element=>element+10)
//console.log(r3)// no change because its work is to select not to modify

//map (modify)
//add 10 for each ele
let r4=testData.map(ele=>ele+10)
//console.log(r4)

//add 10 for ele <50 and sub 20 from >50
let r5=testData.map(function(ele){
    if(ele<50)
        return ele+10;
    else 
        return ele-20;
})
//console.log(r5) 

let r6=testData.map(ele=>ele>10)
//console.log(r6) //for selection it returns boolean values

//reduce   array to single value
// find sum of testData
const sum=testData.reduce((accumulator,element)=> accumulator+element)   //pakka 2 parameters required
//accumulator stores the value of previours operation  
// for the first time (iteration) accu stores array[0] and ele stores array[1]
//console.log(sum)

//find smallest nd big ele
const big=testData.reduce((a,b)=> (a>b)?a:b)
//console.log(big)

const small=testData.reduce((a,b)=> (a<b)?a:b)
//console.log(small)

//find(ele) findIndex(with index)
//search 25
let ans=testData.find(ele=>ele===25)
//console.log(ans)
let ans1=testData.findIndex(ele=>ele===-12)
//console.log(ans1)

//sort
let data=[9,10,8,4]
let ascending=data.toSorted((a,b)=>a-b) //to ensure +ve or -ve nd 0 it compares a nd b to sort
//console.log(data)
//console.log("new ascending array is",ascending)
//console.log(data)
let descending=data.sort((a,b)=>b-a)
//console.log("new descending array is",descending)
//makes lecsical(bitwise) (string) level comparision 
//console.log(data)

const student=[
    {id:1,name:'Ravi',marks:78},
    {id:2,name:'Bhau',marks:58},
    {id:3,name:'Venna',marks:98},
    {id:4,name:'Vasu',marks:88},
    {id:5,name:'Raju',marks:48},
]

let res=student.filter(studentobj=>studentobj.marks>80)
//console.log(res)

//find sum of marks of all students
let sumOfMarks=student.reduce((acc,stdObj)=>acc+stdObj.marks,0)
//console.log(sumOfMarks)//returns NaN i.e not a number without  ,0 nd =>acc.marks instead of acc 
//so we set intial val to acc i.e (,0)  so acc recives 0 as intial val

let data1=student.map(stuObj=>stuObj)
//console.log("............",data1)//to see all values

//what is error
//console.log(a)//a is not defined
//console.log([1,2,3].filter())

//creating new error
//const err=new Error("ur abnormal !!!!")
//console.log(err.name)
//console.log(err.message)
//console.log(err.stack)


//Handling error
console.log("first")
try{
console.log(a)//a is not define
}
catch(err){
    console.log(err.message)
}//error handled cause our application has catch block
console.log("Second")//not executed due to error in previous line 129
console.log("third")

