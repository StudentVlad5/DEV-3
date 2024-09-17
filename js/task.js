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
        it.addEventListener("mousedown", selectElement);
      });
    }
  }
});


// To store selected elements for moving
let selectedElements = [];
let isSelecting = false;
let offsetData = [];

document.addEventListener('keydown', (event) => {
  // Press 'Shift' to enable multiple selection
  if (event.key === 'Shift') {
    isSelecting = true;
  }
});

document.addEventListener('keyup', (event) => {
  // Release 'Shift' to disable multiple selection
  if (event.key === 'Shift') {
    isSelecting = false;
  }
});

function selectElement(event) {
  // If Shift is pressed, allow multiple selection
  if (isSelecting) {
    // Toggle the selection of the clicked element
    if (selectedElements.includes(event.target)) {
      // Deselect if already selected
      event.target.style.border = '';
      selectedElements = selectedElements.filter(el => el !== event.target);
    } else {
      // Select if not already selected
      event.target.style.border = '2px dashed red';
      selectedElements.push(event.target);
    }
  } else {
    // If Shift is not pressed, drag all selected elements
    if (!selectedElements.includes(event.target)) {
      selectedElements.forEach(el => el.style.border = ''); // Reset borders
      selectedElements = [event.target]; // Select only the clicked element
      event.target.style.border = '2px dashed red';
    }

    // Prepare for dragging the selected elements
    startGroupDrag(event);
  }
}

function startGroupDrag(event) {
  // Calculate offsets for all selected elements relative to the mouse
  offsetData = selectedElements.map(el => ({
    element: el,
    offsetX: event.clientX - el.getBoundingClientRect().left,
    offsetY: event.clientY - el.getBoundingClientRect().top
  }));

  // Attach the move and stop drag events to the document
  document.addEventListener('mousemove', dragGroup);
  document.addEventListener('mouseup', stopGroupDrag);
}

function dragGroup(event) {
  // Move all selected elements together based on the mouse movement
  offsetData.forEach(data => {
    data.element.style.position = 'absolute';
    data.element.style.left = event.clientX - data.offsetX + 'px';
    data.element.style.top = event.clientY - data.offsetY + 'px';
  });
}

function stopGroupDrag() {
  // Remove the event listeners when the drag is finished
  document.removeEventListener('mousemove', dragGroup);
  document.removeEventListener('mouseup', stopGroupDrag);
}
