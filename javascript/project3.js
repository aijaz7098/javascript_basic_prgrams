let p1=document.querySelector('#p1');
let inc1=document.querySelector("#b1");
let dec1=document.querySelector("#b2")
let i=0;
inc1.addEventListener('click',function(){
    i++;
    p1.innerHTML=i;
    p1.style.color='green';
})
dec1.addEventListener('click',function(){
    i--;
    p1.innerHTML=i;
    p1.style.color='red';
})

// stopwatch
let j=0;
let k=0;
let h=0;
let id=0;
let p3=document.querySelector('#p3');
let start=document.querySelector('#b3');
let stop=document.querySelector('#b4');
let reset=document.querySelector('#b5');
p3.innerHTML=0+" : "+0+" : "+0;
start.addEventListener('click',function(){
   id= setInterval(function(){
        j++;
        if(j<=60)
        {
            p3.innerHTML=h+" : "+k +" : "+j;
        }
        else if(j>=60)
        {
             k++
            j=0;
            p3.innerHTML=h+" : "+k +" : "+j;
        }
        else if(k>60)
        {
            h++;
            k=0;
            p3.innerHTML=h+" : "+k +" : "+j;
        }
        
    },1000)
})
stop.addEventListener('click',function(){
    // clearTimeout(id)
   
    clearInterval(id)
    
})

reset.addEventListener('click',function(){
    h=0
    k=0
    j=0
    p3.innerHTML=0+" : "+0+" : "+0;
})