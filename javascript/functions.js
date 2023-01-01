
let a=Number(prompt("enter first number"))
let b=Number(prompt("enter second number"))
let c=Number(prompt("enter third number"))
 let greater=(x,y,z)=>{
 if(x>y && x>z)
  return x
  else if(y>z)
  return y
  else 
  return z
}
let great=greater(a,b,c)
alert("the greatest number is "+great)

/*function sum1(){
    console.log(a+b)
}
sum1()

function sum2(a1,b1){
 console.log(a1+b1)
}
sum2(20,30)

function sum3(a2,b2){
    console.log(a2-b2)
}
sum3(a,b)

const fun=(x,y)=>{
    return c=Math.pow((x+y),2)
}
d=fun(a,b)
console.log(d) */