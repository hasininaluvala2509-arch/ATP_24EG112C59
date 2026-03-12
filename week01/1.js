//NUMBER
let aa=10;

//to print
//console.log(a)

let b=20
let c=30;
//console.log("a is ",a,"b is ",b,"and c is ",c)
//console.log(`a is ${a} b is ${b} c is ${c}`)

//string
let username="HAS";//or can also 'has' no specification os '' ""
let firstname = 'ram'//'' or "" considered as string
//console.log(username)

//boolean
let status=true;

//array (grp of elements)
let marks=[9,8,7];

//object (grp of properties)
let person={ 
pid:100,// : , imp
name:"has" }

//----------
/*
let a;
console.log(typeof a)

a=10;  //behaves like int
console.log(typeof a)

a='hi'; //behaves like string
console.log(typeof a)

a=true; //boolean
console.log(typeof a)

a=[1,2,3]//array
console.log(typeof a)

a={}//object
console.log(typeof a)
*/


//--------
let a1=123;

let b1="123"

//console.log(typeof a1)//number
//console.log(typeof b1)//string

let a2=100; // assignment operator
let b2="100"; // assignment operator

//console.log(a2==b2) //true or false

//console.log(a2===b2)  //Strict equalto comparision checks datatype aslo


let mark=[10,20,30,40]

//iterate
for(let index=0;index<mark.length;index++)
{
//console.log(mark[index])
}

//-----------
//functions

function findSum(a3,b3)//function declaration
{
    //console.log("first");
    let sum=a3+b3;
    //console.log(sum);
    return sum;
}
/*
let ans = findSum(100,"bc")
    console.log(ans);

let ans1 = findSum(100,200)
    console.log(ans1);

    // function expression

     // let result = a4();
  //console.log(result)//error

    let a4=10
    a4="hi"
    a4=function (){
        return 100
    }//namae less function / anyonomus function
    console.log(a4)

      let result = a4();
  console.log(result) // prints 100*/

  //------------
  //arrow function(to simplify a function expression)

  function findSum1(a4,b4)//function declaration
{
    return a4+b4;
}

let findSum11 = (a,b) => a+b;

let result3 = findSum11(1,2);
console.log(result3);

let test1 = function()
{
    let a= 10;
    let b=20;
    return a+b;
}
console.log(`${test1}`);
console.log(test1);
console.log(test1());

