
document.querySelector('button').addEventListener('click',changecolor);



function changecolor(){
    document.body.style.backgroundColor=`rgb(${randomcolor(256)},${randomcolor(256)},${randomcolor(256)})`;
}
const randomcolor=(number)=>{
    return Math.floor(Math.random()*number)+1;
}
