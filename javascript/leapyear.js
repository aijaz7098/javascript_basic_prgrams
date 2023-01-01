var a=Number(prompt('enter the year '));
if(a%4==0){
    if(a%100==0){
        if(a%400==0){
                 console.log(`leap year ${a}`);
               }else{
                console.log(`not leap year`);
             }
    }else{
        console.log(`leap year ${a}`);
    }
}else{
    console.log(`not leap year`)
}