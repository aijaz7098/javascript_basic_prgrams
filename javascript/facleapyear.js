let a=Number(prompt("enter the year"))
let year=(x)=>{
    if(x%4==0){
        if(x%100==0){
            if(x%400==0){
                return("leap year")
                      }
            else {
                  return ("Not leap year")
                 }
        }
        else {
            return ("leap year")
            }
        }
    else{
        return ("not leap year")
    }
}
let leapyear=year(a)
alert(leapyear)