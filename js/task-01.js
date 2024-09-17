const numberOfCategories = document.querySelectorAll(`#categories > li.item`)
const nameOfCategories = document.querySelectorAll(`#categories > li.item > h2`)
const numberCategoryEl =  document.querySelectorAll(`h2 ~ ul`)

console.log(`Number of categories: ${numberOfCategories.length}`);

for(let i = 0; i < numberOfCategories.length; i += 1) {
    console.log(`Category: ${nameOfCategories[i].textContent}`);
    console.log(`Elements: ` + numberOfCategories[i].querySelectorAll(`ul > li`).length);
    console.log(`Elements (by the children): ` + numberCategoryEl[i].children.length);
}

// const list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');
// console.log(`В списке ${items.length} категории:`);
// items.forEach(node => {const h2 = node.querySelector('h2');const nodeItems = node.querySelectorAll('li');
// console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);}); 
