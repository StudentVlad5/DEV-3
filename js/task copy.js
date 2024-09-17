let textContainer = document.querySelector(".textContainer");
const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener("click", (e) => {
  let validationInput = document.querySelector("#validation-input");

  e.preventDefault();
  if (validationInput.value.length > 0) {
    let array = "";
    validationInput.value.split("").map((it, ind) => {
      array += `<span key=${ind} class="dragme">${it}</span>`;
    });
    if (array) {
      textContainer.innerHTML = array;
      const draggables = document.querySelectorAll(".dragme");
      draggables.forEach((it) => {
        it.addEventListener("mousedown", startDrag);
      });
    }
  }
});

let selectedElement = null;
let offsetX = 0;
let offsetY = 0;

function startDrag(e) {
  // Set the selected element to the one being clicked on
  selectedElement = e.target;

  // Calculate the offset between the mouse position and the element's position
  offsetX = e.clientX - selectedElement.getBoundingClientRect().left;
  offsetY = e.clientY - selectedElement.getBoundingClientRect().top;

  // Attach the move and stop drag events to the document
  document.addEventListener("mousemove", dragElement);
  document.addEventListener("mouseup", stopDrag);
}

function dragElement(e) {
  if (!selectedElement) return;

  // Update the position of the element based on the mouse movement
  selectedElement.style.position = "absolute";
  selectedElement.style.left = e.clientX - offsetX + "px";
  selectedElement.style.top = e.clientY - offsetY + "px";
}

function stopDrag() {
  // Remove the event listeners when the drag is finished
  document.removeEventListener("mousemove", dragElement);
  document.removeEventListener("mouseup", stopDrag);

  // Clear the selected element
  selectedElement = null;
}

// add class on the selected by the mouse
document.addEventListener("click", function (e) {
  let x = e.clientX,
    y = e.clientY,
    stack = [],
    elementMouseIsOver = document.elementFromPoint(x, y);

  stack.push(elementMouseIsOver);
  const span = document.querySelector(".textContainer");
  console.log(span.tagName);
  while (elementMouseIsOver.tagName !== "HTML") {
    elementMouseIsOver.style.pointerEvents = "none";
    elementMouseIsOver = document.elementFromPoint(x, y);

    stack.push(elementMouseIsOver);
  }

  /* Now clean it up */
  let i = 0,
    il = stack.length;

  for (; i < il; i += 1) {
    stack[i].style.pointerEvents = "";
  }
  /* add class for span */
  stack.forEach((it) => console.log(it));
});
