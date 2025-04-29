function changeText() {n
    const text = document.getElementById("dynamic-text");
    text.textContent = "Text has been changed dynamically!";
  }
  
  function styleText() {
    const text = document.getElementById("style-text");
    text.classList.toggle("highlight");
  }
  
  function toggleElement() {
    const container = document.getElementById("container");
    const existing = document.getElementById("new-element");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newElem = document.createElement("p");
      newElem.id = "new-element";
      newElem.textContent = "This element was added!";
      container.appendChild(newElem);
    }
  }