/* 7.write a function that recives an array & search ele as args 
 and returns the index of that search ele in the array .
 it should return "not found" when search ele is not found  */

 function arrSearch(arr,ele)
 {
    let eleIndex = 0,i=0;
    for( i=0;i<arr.length;i++)
        if(arr[i]==ele)
        {
            eleIndex = i
            return "Element found at "+i+"th index"
        }
    if(eleIndex==0)
        return "not found"
  }

  let array = [10,20,30,40,50,60];
  let result = arrSearch(array,50);
  console.log(result);