//5.write a function that recives 3 no args and return the big no


function args(a,b,c)
{
    if(a===b && b===c)
        return "All are equal"
    else if(a>=b && a>=c)
        return a
    else if(b>=a && b>=c)
        return b
    else if(c>=a && c>=b)
        return c
}

let result = args(7,1,1)
console.log(result);
