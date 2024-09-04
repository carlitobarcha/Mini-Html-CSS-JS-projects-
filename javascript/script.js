
// // // // //const garments = ['t-shirt', 'jeans', 'jacket', 'hat', 'scarf', 'sweater'];


// // // // //const itemToCheck = 'jeans';

// // // // //if (garments.includes(itemToCheck)) {
// // // // //  console.log(`${itemToCheck} is available in the store.`);
// // // // } 
// // // // else
// // // //  {
// // // //   console.log(`${itemToCheck} is not available in the store.`);
// // // // }
    


// // // function User(name) 
// // // {
// // //   console.log("Hello, " + name + "!");
// // // }


// // // User("Khalid")
// // // User("Khalid")
// // // User("Khalid")
// // // User("Khalid")
// // // User("Khalid")
// // // User("Khalid")
// // // User("Khalid")
// // // User("Khalid")

// // function addThreeCharacters(fname , courses , age ){
// //   console.log(`Hello ${fname}`)
// //   console.log(`you applied for ${courses}`)
// //   console.log(`your age is  ${age}`)
// // }

// // addThreeCharacters("Alex" ,  ['ui/ux' , 'web-dev ,'] , 21)



// // function tripDetails(destination, days, cost) {
// //   console.log(`Destination: ${destination}`);
// //   console.log(`Number of Days: ${days}`);
// //   console.log(`Total Cost: $${cost}`);
// // }

// // tripDetails("Gilgit", 7, 1500);




// // function displayCharacterInfo(name, occupation, location) {
// //   console.log(`Name: ${name}`);
// //   console.log(`Occupation: ${occupation}`);
// //   console.log(`Location: ${location}`);
// // }

// // displayCharacterInfo("Khalid", "Software Engineer", "Pakistan");




//  /function studentProfile(studentName, subjects, grade) {
//   console.log(`Student Name: ${studentName}`);
//   console.log(`Enrolled Subjects: ${subjects.join(', ')}`);
//   console.log(`Grade: ${grade}`);
// }

// studentProfile("Emma", ['Mathematics', 'Physics', 'Chemistry'], 'A'); 



// function makingMaggie( water , maggie , Powder) 
// {
//   console.log("Initially Boil the water"  + water);
//   console.log("add maggi " + maggie);
//   console.log("add powder in the boiling water" + Powder);
//   console.log("boil it well ");
//   return" Your maggie is ready"
// }

// const result = makingMaggie(" 500ml" , "1 packet" , " 1 packet")
// console.log(result);


// const makingMaggie = (water, maggie, Powder) => {
//   console.log("Initially Boil the water - " + water);
//   console.log("add maggi - " + maggie);
//   console.log("add powder in the boiling water -" + Powder);
//   console.log("boil it well-");
//   return "Your maggie is ready-";
// };

// const result = makingMaggie(" 500ml", "1 packet", "1 packet");
// console.log(result);






// let makingMaggie = function(water, maggie, powder) {
//   console.log("Initially Boil the water" + water);
//   console.log("add maggi " + maggie);
//   console.log("add powder in the boiling water" + powder);
//   console.log("boil it well ");
//   return "Your maggie is ready";
// };

// const result = makingMaggie("500ml", "1 packet", "1 packet");
// console.log(result);


// function HigherOrderFunction(matter , A , B)
// {
//   console.log(matter)
//   console.log(A+3)
//   B()
// }  
// HigherOrderFunction(`laptop` , 5 , function()
// {
//   console.log('CodeWithCarlito')
// })


// function HigherOrderFunction (things , A , Khalid)

// {
//   console.log(things);
//   console.log(A*5);
//   Khalid()
// }

// HigherOrderFunction("laptop" , 5 , function()
// {
//   console.log("CodeWithCarlito");
// }
// )



// function HigherOrderFunction (things , A , Khalid)
// {
//   console.log(things);
//   console.log(A*5);\
//   Khalid()

// }
// HigherOrderFunction("Laptop" , 5 , function())
// {console.log(Khalid);}


//for each 
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log(number * 2); 
// });


// //some 
// const numbers = [1, 2, 3, 4, 5];

// const hasEvenNumber = numbers.some(function(number) {
//     return number % 2 === 0;
// });

// console.log(hasEvenNumber); 


// //filter

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers); 

// //map 

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log(doubledNumbers); 


//reduce

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, number) {
//     return accumulator + number;
// }, 0);

// console.log(sum); 

//sort 
// const numbers = [5, 3, 8, 1, 2];

// numbers.sort(function(a, b) {
//     return a - b; 
// });

// console.log(numbers); 


//every

// const numbers = [2, 4, 6, 8];

// const allEven = numbers.every(function(number) {
//     return number % 2 === 0;
// });

// console.log(allEven); 
//  then conso


// const user ={
//     fname:"john",
//     age : 21
// }

// console.log(user.age);


// const heading = document.querySelector('#my-heading');


// heading.style.backgroundColor = 'red';
// heading.style.color = 'white';
// heading.style.padding = '10px';
// heading.classList.add("add")
// heading.style.fontSize = "50px" 

//________________________________________________________________________//



// 

const body =  document.querySelector("body") ;
const red = document.querySelector(".RED");
const blue = document.querySelector(".Blue");
const green = document.querySelector(".Green");
const yellow = document.querySelector(".Yellow");
red.addEventListener("click", function() {
  body.style.backgroundColor = "RED";
});
blue.addEventListener("click", function() {
    body.style.backgroundColor = "Blue";
  });
  green.addEventListener("click", function() {
    body.style.backgroundColor = "Green";
  });
  yellow.addEventListener("click", function() {
    body.style.backgroundColor = "Yellow";
  });









































