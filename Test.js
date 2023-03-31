// var chaitanya = {
//     "name" : "Chaitanya Singh",
//     "age" : "28",
//     "website" : "beginnersbook"
//     };
 
// // const text1 = '[ "Ford", "BMW", "Audi", "Fiat" ]';
// // const myArr = JSON.parse(text1);
// // console.log(myArr)
// var myobj = JSON.stringify(chaitanya);
// console.log(myobj)
// var obj= JSON.parse(myobj);
// console.log(obj);

// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

// const obj = JSON.parse(text,function (key,value) {
//     if(key =="birth")
//     {
//         return new Date(value)
//     }
//     // else{
//     //     return value;
//     // }
    
// });
// console.log(obj.name+" "+obj.birth);

const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';

const myObj = JSON.stringify(myJSON);
const myOb = JSON.parse(myJSON);
console.log(myObj)
console.log(myOb)
