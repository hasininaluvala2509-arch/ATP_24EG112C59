 //Exercise 1: Copy & Extend an Array

                    //Goal: Learn array copying with spread
                                let fruits = ["apple", "banana"];
                        
                              //-> Create a new array moreFruits
                              //-> Copy all fruits from fruits
                              //-> Add "orange" at the end using spread
                              let newFruits=[...fruits,"orange"]
                             // -> Print both arrays
                            console.log("fruits",fruits)
                            console.log("newFruits",newFruits)

                        
                        
                       // ✅ Expected Output
                         //     ["apple", "banana"]
                           //   ["apple", "banana", "orange"]
                        
                        //👉 Original array should NOT change.


//Exercise 2: Update User Object
                        
                       // Goal: Learn object cloning & adding new property
                                
                                let user = {
                                  name: "Ravi",
                                  city: "Hyderabad"
                                };
                             // -> Create a new object updatedUser
                              //-> Copy all properties from user
                              //-> Add a new property age: 25
                              let cpyUser={...user,age:25}
                              
                              //-> Print both objects
                              console.log(user)
                              console.log(cpyUser)
                        
                        
                        
                      /*  ✅ Expected Output
                              { name: "Ravi", city: "Hyderabad" }
                              { name: "Ravi", city: "Hyderabad", age: 25 }
                        
                        👉 Original object should remain unchanged.

*/
