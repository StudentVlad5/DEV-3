const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngradients = document.querySelector("#ingredients");

// by for
let arrayIngradientsEl = [];
for(let i=0; i < ingredients.length; i +=1){
let liElem =  document.createElement('li');
liElem.classList.add('item');
liElem.innerHTML = ingredients[i];
arrayIngradientsEl.push(liElem)
}
listOfIngradients.append(...arrayIngradientsEl);
listOfIngradients.innerHTML = '';


// by map
const listIngradElem = ingredients.map(options =>{
let liElem =  document.createElement('li');
liElem.classList.add('item');
liElem.innerHTML = options;
  return liElem
})
listOfIngradients.append(...listIngradElem);