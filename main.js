import "./style.css";
import Chance from "chance";

const chance = new Chance();
const avatar = chance.avatar({ protocol: "https" });
const randomColor = chance.color();
const firstName = chance.first();
const lastName = chance.last();
const eMail = `${firstName}.${lastName}@neuefische.de`; // chance.email({domain: 'example.com'})
const phoneNumber = chance.phone();
const profession = chance.profession();
const birthday = chance.integer({ min: 1910, max: 2010 });
const city = chance.city();
const favouriteAnimal = chance.animal();
const favouriteNumber = chance.integer({ min: 1, max: 9 });

document.querySelector("#app").innerHTML = `
  <img src="${avatar}" alt="random avatar">
  <h1>${firstName} ${lastName}</h1>
  <ul>
  <li><a href="#" target="_blank">${eMail}</a></li>
  <li><a href="#" target="_blank">${phoneNumber}</a></li>
  </ul>
  <p> Hey, my name is ${firstName} and I am a ${profession}.</p> 
  <p> I was born in the year of ${birthday} in the city of ${city}.</p> 
  <p> My favorite animal is the ${favouriteAnimal}.</p>
  <p> But I also love numbers! My favorite one is ${favouriteNumber}.</p>
`;
