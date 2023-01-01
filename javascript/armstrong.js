//Armstrong Number
num1=Number(prompt("enter the number"))
var num=num1;
var num2=0;
var num3=0;
while(num1!=0){
    num2=num1%10;
    num1=Math.floor(num1/10)
    num3=num3+Math.pow(num2,3)
}
console.log(num3)
if(num3==num)
{
    console.log(`${num} is armstrong number`)
}
else{
    console.log(`${num} is not armstrong number`)
}
