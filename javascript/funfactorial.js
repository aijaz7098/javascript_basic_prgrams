let a=Number(prompt("enter the number"))

 let fact=(x)=>{
    let f=1;
    while(x>=1){
        f=f*x;
        x--;
    }
    return f
 }
 let factorial=fact(a);
 alert(factorial)