/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.
*/
console.log("ASSIGNMENT 1")
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


//    1. Use filter() to get only inStock products
let instockprdt=cart.filter(cartObj=>cartObj.inStock===true)
console.log(instockprdt)

//  2. Use map() to create a new array with:  { name, totalPrice }
let newArray=cart.map(function (cartObj){ return cartObj.name + "  " + cartObj.price*cartObj.quantity})
console.log(newArray)

//  3. Use reduce() to calculate grand total cart value
let garndTot=cart.reduce((a,b)=>a+b.price,0)
console.log("Grand Total is  :",garndTot)

//    4. Use find() to get details of "Mouse"
let details=cart.find(cartObj=>cartObj.name==="Mouse")
console.log(details)

//    5. Use findIndex() to find the position of "Keyboard"
let indexPos=cart.findIndex(index=>index.name==='Keyboard')
console.log(indexPos)

console.log("ASSIGNMENT 2")
/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//    1. filter() students who passed (marks ≥ 40)
let passes=students.filter(stuObj=>stuObj.marks>=40)
console.log(passes)
/*    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D*/
              students.grade="NULL";
let grade=students.map(function(stuObj){
    if(stuObj.marks>=90)
         stuObj.grade='A'
    else if(stuObj.marks>=75)
         stuObj.grade='B' 
    else if(stuObj.marks>=60)
         stuObj.grade='C'
    else 
         stuObj.grade='D' 
    return stuObj
})
console.log(grade)

//   3. reduce() to calculate average marks
let sum=students.reduce((a,b)=> a+b.marks,0)
console.log(sum/students.length)

//   4. find() the student who scored 92
let above92=students.find(stuobj=>stuobj.marks==92)
console.log(above92)

//   5. findIndex() of student "Kiran"
let index=students.findIndex(stuObj=>stuObj.name==="Kiran")
console.log(index,"is index Kiran")

console.log("ASSIGNMENT 3")
/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
console.log(employees)

//    1. filter() employees from IT department
let emp=employees.filter(empObj=>empObj.department=="IT")
console.log(emp)

//    2. map() to add:  netSalary = salary + 10% bonus
let salUpdation=employees.map((empObj)=>
    empObj.salary+empObj.salary*0.1
    //return empObj.salary
)
console.log(salUpdation)
console.log(employees)


//    3. reduce() to calculate total salary payout
let totSal=employees.reduce((a,b)=>a+b.salary,0)
console.log("Total salary to be payedout is :",totSal)

//    4. find() employee with salary 30000
let user=employees.find(empObj=>empObj.salary==30000)
console.log(user)

//    5. findIndex() of employee "Neha"
let index1=employees.findIndex(ind=>ind.name=="Neha")
console.log(index1," is index of Neha")

console.log("ASSIGNMENT 4")

/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
console.log(movies)



//    1. filter() only "Sci-Fi" movies
let mov=movies.filter(movieObj=>movieObj.genre=="Sci-Fi")
console.log(mov)

//    2. map() to return:            "Inception (8.8)"
let title=movies.map(movieObj=>movieObj.name=="Inception" && movieObj.rating==8.8)
console.log(title)

//    3. reduce() to find average movie rating
let avgRating = movies.reduce(a,b=>a+b.rating,0)
console.log("avgRating is : ",avgRating)

//    4. find() movie "Joker"
//    5. findIndex() of "Avengers"

