// Selected elements for typing user text
let textContainer = document.querySelector(".textContainer");
const submitButton = document.querySelector(".submitButton");
// To store selected elements for moving
let selectedElements = [];
let isSelecting = false;
let offsetData = [];

// Add event for new elemets
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

// Press 'Alt' to enable multiple selection
document.addEventListener("keydown", (e) => {
  if (e.key === "Alt") {
    isSelecting = true;
  }
});

// Release 'Alt' to disable multiple selection
document.addEventListener("keyup", (e) => {
  if (e.key === "Alt") {
    isSelecting = false;
  }
});

// Press 'Esc' or doubleClick to remove selection
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    removeGroupDrag();
  }
});
document.addEventListener("dblclick", () => {
  removeGroupDrag();
});

function selectElement(e) {
  // If Alt is pressed, allow multiple selection
  if (isSelecting) {
    // Toggle the selection of the clicked element
    if (selectedElements.includes(e.target)) {
      // Deselect if already selected
      e.target.style.border = "";
      selectedElements = selectedElements.filter((el) => el !== e.target);
    } else {
      // Select if not already selected
      e.target.style.border = "2px dashed red";
      selectedElements.push(e.target);
    }
  } else {
    // If Alt is not pressed, drag all selected elements
    if (!selectedElements.includes(e.target)) {
      // Reset borders
      selectedElements.forEach((el) => (el.style.border = ""));
      // Select only the clicked element
      selectedElements = [e.target];
      e.target.style.border = "2px dashed red";
    }

    // Prepare for dragging the selected elements
    startGroupDrag(e);
  }
}

function startGroupDrag(e) {
  // Calculate offsets for all selected elements relative to the mouse
  offsetData = selectedElements.map((el) => ({
    element: el,
    offsetX: e.clientX - el.getBoundingClientRect().left,
    offsetY: e.clientY - el.getBoundingClientRect().top,
  }));

  // Attach the move and stop drag events to the document
  document.addEventListener("mousemove", dragGroup);
  document.addEventListener("mouseup", stopGroupDrag);
}

function dragGroup(e) {
  // Move all selected elements together based on the mouse movement
  offsetData.forEach((data) => {
    data.element.style.position = "absolute";
    data.element.style.left = e.clientX - data.offsetX + "px";
    data.element.style.top = e.clientY - data.offsetY + "px";
  });
  setInterval(checkItems(), 1000);
}

// Remove the event listeners when the drag is finished
function stopGroupDrag() {
  document.removeEventListener("mousemove", dragGroup);
  document.removeEventListener("mouseup", stopGroupDrag);
}

function removeGroupDrag() {
  isSelecting = false;
  selectedElements.forEach((it) => (it.style.border = "none"));
  selectedElements = [];
}
// Check Items for the same coordinate
function checkItems() {
  let draggables = document.querySelectorAll(".dragme");
  let coordinate = [];
  draggables.forEach((it, ind) =>
    coordinate.push({
      ind,
      x: it.getBoundingClientRect().left,
      y: it.getBoundingClientRect().top,
    })
  );
  // sort and check x,y - move item, if items have the same coordinates
  let unique = JSON.parse(JSON.stringify(coordinate)).sort((a, b) => a.x - b.x);
  unique.map((k, ind) => {
    if (
      ind > 0 &&
      Math.abs(k.x - unique[ind - 1].x) < 10 &&
      Math.abs(k.y - unique[ind - 1].y) < 10
    ) {
      if (draggables[k.ind].style.left) {
        draggables[k.ind].style.left =
          parseInt(draggables[k.ind].style.left, 10) + 20 + "px";
      }
    }
  });
}
