
//4.smallest in array marks1    

let marks1=[90,78,65,98],sum=0

let min=marks1[0]

for(let j=0;j<marks1.length;j++)
    {
        if(min>marks1[j])
            min= marks1[j]
    }     
    console.log(`smallest element in marks is ${min}`)
