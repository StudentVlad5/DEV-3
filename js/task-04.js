let counterValue = 0;
const decrBtn = document.querySelector(`[data-action = "decrement"]`);
const incrBtn = document.querySelector(`[data-action = "increment"]`);
const result = document.querySelector(`#value`)
const styleBtn = 'width: 40px;height: 40px;padding: 10px;display: flex;justify-content: center;background-color: white;border: 2px solid gray;box-shadow: inset 0 -3em 3em rgb(0 0 0 / 10%), 0 0 0 2px rgb(255 255 255), 0.3em 0.3em 1em rgb(0 0 0 / 30%);border-radius: 5px;font-size: 16px;';

result.innerHTML = "";
document.querySelector('#counter').style.cssText +='display: flex; align-items: center; flex-direction: row; flax-wrap: nowrap; gap: 15px'
decrBtn.style.cssText += styleBtn;
incrBtn.style.cssText += styleBtn;
let resultOfClick = document.createElement("button");
resultOfClick.style.cssText += styleBtn;
resultOfClick.innerHTML = counterValue;
result.appendChild(resultOfClick);


decrBtn.addEventListener(`click`, ()=>{
    counterValue -=1;
    resultOfClick.innerHTML = counterValue
})
incrBtn.addEventListener(`click`, ()=>{
    counterValue +=1;
    resultOfClick.innerHTML = counterValue
})