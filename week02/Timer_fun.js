// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
console.log("Exam submitted successfully")
//         After 2 seconds → show: “Evaluating answers…”
setTimeout(()=>{
        console.log("Evaluating answers...")
},2000)
//         After 4 seconds → show: “Result: Pass”
setTimeout(()=>{
        console.log("Result: Pass")
},4000)



// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        let a=setTimeout(()=>{console.log()},10000)

//         Show “OTP Sent Successfully”
        console.log("OTP sent successfully")
//         Start 5-second countdown
let second=5
let i=setInterval(()=>{
second--;
        console.log("OTP can resend in : ",second,"secs")
        if(second===0){
                console.log("Resend OTP ??")
                clearInterval(i)
        }

},1000)
