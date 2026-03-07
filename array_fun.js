// 6.write fun that recives an array as arg and return their sum

function arr(a)
{
    let sum = 0;
    for(let i=0;i<a.length;i++)
        sum+=a[i]
    return sum
}

let array = [10,20,30,40,50]
let result = arr(array)

console.log(result)