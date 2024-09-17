const inputElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');
function fontSize (){
    spanElem.style.fontSize = `${inputElem.value}px`}
fontSize ();
inputElem.addEventListener('input', fontSize)