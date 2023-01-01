const devc=document.querySelectorAll('.child');
devc.forEach(function(item){
    item.addEventListener('click',function(){
        item.style.backgroundColor=`rgb(${randomcolor(255)},${randomcolor(255)},${randomcolor(255)})`
    })
    
})

function randomcolor(number){
 return Math.floor(Math.random()*number)+1;
}

// form validation 
let email=document.querySelector('#email');
let password=document.querySelector('#password');
let para=document.querySelector('#para');
let form=document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log("clicked")
    if(email.value==="" || password.value==="")
    {
        
        para.innerHTML="Please Enter All the fields";
        email.value="";
        password.value="";
    }
    else{
        email.value="";
        password.value="";
        para.value="";
    }
})