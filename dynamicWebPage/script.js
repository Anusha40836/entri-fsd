let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("heading");
bgContainerEl.appendChild(headingEl);

let unorderedListEl = document.createElement("ul");
unorderedListEl.classList.add("list-container");
bgContainerEl.appendChild(unorderedListEl);

let groceryItems = [
  "milk",
  "choco",
  "cake",
  "sauce",
  "maggi",
  "snacks",
  "chips",
];

for (elements of groceryItems) {
  let ListItemEl = document.createElement("li");
  ListItemEl.textContent = elements;
  unorderedListEl.appendChild(ListItemEl);
}

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "deliveryMode";
bgContainerEl.appendChild(inputEl);

let labelE1 = document.createElement("label");
labelE1.textContent = "Need Home Delivery";
labelE1.classList.add("delivery-text");
labelE1.setAttribute("for", "deliveryMode");
bgContainerEl.appendChild(labelE1);

let brEl = document.createElement("br");
bgContainerEl.appendChild(brEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed To Pay";
bgContainerEl.appendChild(buttonEl);
