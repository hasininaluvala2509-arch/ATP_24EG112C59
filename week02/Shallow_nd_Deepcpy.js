//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
    //1. Create a shallow copy of user
    let cpyUser={...user}
    //2. Change:
          //i. name in the copied object
          cpyUser.name='hasi'
          //ii. preferences.theme in the copied object
          cpyUser.preferences.theme='white'
          //iii .Log both original and copied objects
          console.log(user)
          console.log(cpyUser)
          //iv. Observe what changes and what doesn’t


//Hands-On 2: Deep Copy (Isolation & Safety Use Case)
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
      //1. Create a deep copy of order
      let cpyOrder=structuredClone(order)
      //2. Modify in copied object:
           // i. customer.address.city
           cpyOrder.customer.address.city="wrngl"
            //ii. items[0].price
            cpyOrder.items[0].price=5555555
            //iii. Verify original object remains unchanged
            console.log(order)
            console.log(cpyOrder)