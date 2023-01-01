//Reverse of Number and Palindrom of Number 
/*let num1=Number(prompt("enter the number"))
var num2=num1
var rev=0;
while(num1!=0){
    
    rev=(rev*10)+(num1%10)
    num1=Math.floor(num1/10)
}
console.log(rev)

//palindrom
if(rev===num2)
{
    console.log(`${num2} is palindrom`)
}
else
{
    console.log(`${num2} is not palindrom`)
}
*/
//Palindrom of string
let str=prompt("enter any name")
function fun(){
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===str[str.length-1-i])
        {
            return (`${str} is palindrom`)
        }
        else
        {
            return(`${str} is not palindrom`)
        }
    }
}
let b=fun(str)
console.log(b)

// sum of digits of number

 let number1=Number(prompt("enter number"))
var sum=0;
 while(number1!=0){
     sum=sum+number1%10;
     number1=number1/10
 }
 console.log(sum)
