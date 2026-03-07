/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];
*/
let testData=[32, 35, 28, 40, 38, 30, 42];
console.log(testData)

//    1. filter() temperatures above 35
let moreThan35=testData.filter(temp => temp>35)
console.log(moreThan35)

// 2. map() to convert all temperatures from Celsius → Fahrenheit
let Fahrenheit=testData.map(temp => temp+32)
console.log(Fahrenheit)

// 3. reduce() to calculate average temperature
let avgtemp=testData.reduce(function(sum,temp){
    return sum/testData.length
})
console.log(avgtemp)
   // 4. find() first temperature above 40
console.log("Temp above 40 is ",testData.find(tempObj=> tempObj>40))
   // 5. findIndex() of temperature 28
console.log("Index of Temp 28 is ",testData.findIndex(tempObj=> tempObj===28))


//    Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

const courses = ["javascript", "react", "node", "mongodb", "express"];

   //  1. filter() courses with name length > 5
console.log("Course with name length > 5 ",courses.filter(courseObj=> courseObj.length>5))

   //  2. map() to convert course names to uppercase
console.log("Course names to uppercase ",courses.map(tempObj=> tempObj.toUpperCase()))

   //  3. reduce() to generate a single string:
   //            "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
console.log("To single string: ",courses.reduce((prev,next)=> prev+" | "+next))

   //  4. find() the course "react"
console.log("Finding react course: ",courses.find(courseObj=> courseObj==="react"))
   //  5. findIndex() of "node"
console.log("Finding Index of node course: ",courses.findIndex(courseObj=> courseObj==="node"))




// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

const marks = [78, 92, 35, 88, 40, 67];
   //  1. filter() marks ≥ 40 (pass marks)
console.log("Marks ≥ 40  ",marks.filter(marksobj=> marksobj>=40))

   //  2. map() to add 5 grace marks to each student
console.log("Add 5 grace marks to each student ",marks.map(marksobj=> marksobj+5))

   //  3. reduce() to find highest mark
console.log("Find highest mark: ",marks.reduce(function(prev,next){
return prev>next?prev:next
} ))

   //  4. find() first mark below 40
console.log("Marks < 40  ",marks.find(marksobj=> marksobj<40))

   //  5. findIndex() of mark 92
console.log("Marks = 92 ",marks.findIndex(marksobj=> marksobj=92))

