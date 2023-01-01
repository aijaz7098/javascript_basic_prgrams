// arr1=[1,5,3,8];
// var c;
// console.log(arr1)
// num1=Number(prompt("enter the number to search "))
// for(let i=0;i<arr1.length;i++){
//     if(num1===arr1[i])
//     {
//        c=i;
//     }
// }
// console.log(c)

// Array sort 
// //Asscending order
// arr2=[3,5,2,1,10,7]
// var c;
// console.log(arr2)
// for(let j=0;j<arr2.length;j++){
//     for(let i=0;i<arr2.length;i++)
// {
//     if(arr2[i]>arr2[i+1])
//     {
//         c=arr2[i+1];
//         arr2[i+1]=arr2[i];
//         arr2[i]=c;
//     }
// }
// console.log(arr2)
// }
// console.log(arr2)

//Descending order

let arr3=[1,4,9,3,44,31]
var d;
for(let j=0;j<arr3.length;j++)
{
    for(let i=0;i<arr3.length;i++)
    {
        if(arr3[i]<arr3[i+1])
        {
            d=arr3[i+1]
            arr3[i+1]=arr3[i]
            arr3[i]=d
        }
    }
}
console.log(arr3)