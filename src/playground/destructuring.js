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

const book = {
  title: 'How we die',
  author: 'Some One',
  publisher: {
    name: 'NXB - TUOI TRE'
  }
}

const { name: publisherName = 'Self - published' } = book.publisher;

console.log(publisherName);