//Initial data:
        let totalAmount = 0;


//   1. Add ₹500 to the total
totalAmount+=500       // totalAmount = 500
//   2. Add ₹1200 to the total
totalAmount+=1200      // totalAmount = 1700
//   3. Apply a ₹200 discount
totalAmount-=200      // totalAmount = 1500
//   4. Add 18% GST
totalAmount*=18/100   // totalAmount = 270
//   5. Print the final bill amount
console.log(`Total amount is : ${totalAmount}`)