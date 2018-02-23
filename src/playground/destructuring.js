// const person ={
//     name:'Anu',
//     age:20,
//     location:{
//         city:'Banglore',
//         temp:92

//     }

// };
// const {name:firstName='Anonymous',age}=person
// // const name=person.name;
// // const age=person.age;
// console.log(`${firstName} is ${age}`);

// const{city,temp}=person.location
// if(city && temp)
// console.log(`It's ${temp} in ${city}`);

// const book ={
//     title:'Ego is new enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         //name:'Penguin'
//     }
// }

// console.log(`${book.publisher.name}`);

// const {publisher:publishername="besties"} =book.publisher;

// console.log(publishername)
const adress=['1299 S Juniper Street','Pheledelphia','Pensilvania','1947']

const [,city ,state]=adress;

console.log(`You are in ${state}`)


const item=['Coffe(hot)','$2.00','$2.5','$3.00']

const[cofee, ,bill]=item

console.log(`your ${cofee} costs ${bill}.`);