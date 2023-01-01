var a=Number(prompt('enter your number'));
var i=2;
var j=1;

while(i<a)
{
    if(a%i==0)
    {
        j=0;
        break;
    }else
     i++ 
}
if(j==0)
{
    console.log("Not Prime Number")
}
else{
    console.log("Prime Number")
}
