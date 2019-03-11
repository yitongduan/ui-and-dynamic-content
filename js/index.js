//References to active elements 
const userInput = document.getElementById("user-input");
const btn = document.getElementById("trigger-click");
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");
const input = document.querySelector("#shopping-list input");
//Event Handler
function addItem() {   
    //Default value of error paragraph
    err.textContent = null;
    //Removing Whitespace
    userInput.value = userInput.value.trim();
    //If user input is not empty
    if (userInput.value !== ""){ 
        //Create a list item
        let listItem = document.createElement("li");
        
        //Assigning the value of text-field to the list item
        listItem.textContent = userInput.value;
        
        //Appending the new element to DOM
        displayData.appendChild(listItem);
        // add line between every item
        let hr = document.createElement("hr");
        listItem.appendChild(hr);
        input.value = " ";
    } else {
        err.textContent = "Please enter a value.";
    }
   
}

//Registering button for "click" event
btn.addEventListener("click", addItem);

