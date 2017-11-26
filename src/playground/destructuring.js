//
// Object destructuring
//


// const person = {
//   name: 'Quynh',
//   age: 26,
//   location: {
//       city: 'HCM',
//       temp: 50
//   }
// };

// const { name: firstName ='Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}`);
// if(city && temperature) {
//   console.log(`It is ${temperature} in ${city}`);
// } 

// const book = {
//   title: 'How we die',
//   author: 'Some One',
//   publisher: {
//     name: 'NXB - TUOI TRE'
//   }
// }

// const { name: publisherName = 'Self - published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'HCM', 'Vietnam', '70000'];

const [street, city, country='No where', zip] = address;

console.log(`You are in ${city} ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffe, small, mediumPrize, large] = item;
console.log(`A medium ${coffe} costs ${mediumPrize}`);