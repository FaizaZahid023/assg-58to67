//1 Get the element of id "main-content" and assign it to a variable:

let mainContent = document.getElementById("main-content");

//2 Display all child elements of "main-content" element:

let children = mainContent.children;
console.log(children);

//3 Get all elements of class "render" and show their innerHTML in the browser:

let renderElements = document.getElementsByClassName("render");
for (let element of renderElements) {
  console.log(element.innerHTML);
}

//4  Fill input value whose element id is "first-name" using JavaScript:

document.getElementById("first-name").value = "Alex";

//5 Repeat part iv for id "last-name" and "email":

document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

//. Node-related tasks:
//6  What is the node type of the element having id "form-content":

let formContent = document.getElementById("form-content");
console.log(formContent.nodeType);  // Outputs: 1 (Element Node)

//7 Show the node type of the element having id "lastName" and its child node:

let lastName = document.getElementById("lastName");
console.log(lastName.nodeType);          // Outputs: 1 (Element Node)
console.log(lastName.firstChild.nodeType); // Outputs: 3 (Text Node)

//8 . Update the child node of the element having id "lastName":

lastName.textContent = "Last Name: Alexander Bank";

//9 Get the first and last child of id "main-content":

console.log(mainContent.firstChild);
console.log(mainContent.lastChild);

//10 Get the next and previous siblings of id "lastName":

console.log(lastName.previousElementSibling);
console.log(lastName.nextElementSibling);

//11 Get the parent node and node type of the element having id "email":

let emailElement = document.getElementById("email");
console.log(emailElement.parentNode);  // Outputs the parent node
console.log(emailElement.parentNode.nodeType);  // Outputs: 1 (Element Node)


