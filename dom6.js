const name = document.getElementById("name");
const washla = document.getElementById("washla");
const login = document.getElementById("login");


let cars = [];
let saxeli=[];
saxeli=document.getElementById("login").value
document.getElementById("name").style.marginTop = (400) + "px";

// Retrieve stored cars from localStorage when the page loads
retrieve();

document.getElementById("dawera").onclick = function () {
    // Retrieve the latest cars array from localStorage
    retrieve();  
    console.log(login);
    saxeli=document.getElementById("login").value

    // Create a new div to display the entered name
    var div = document.createElement('div');
    div.style.position = "relative";
    div.style.marginTop = "1px";
    div.style.marginLeft = "5px";
    div.style.zIndex = "0";
    div.style.height = "20px";
    div.style.width = "500px";
    div.style.backgroundColor = "red";
    document.body.appendChild(div);
    
    // Set the div text to the value entered in the input field
    div.textContent = saxeli +"-----"+document.getElementById("name").value;

    // Update the marginTop of the input field to avoid overlap
    let currentMarginTop = parseInt(document.getElementById("name").style.marginTop) || 0;

    // Push the new value into the cars array
    cars.push(saxeli +"-----"+document.getElementById("name").value);
    // Log the updated cars array
    console.log(cars);
    
    // Save the updated cars array to localStorage
    save();
};



// Save cars array to localStorage
function save() {
    localStorage.setItem('cars', JSON.stringify(cars));
    localStorage.setItem('saxeli', JSON.stringify(saxeli));  // Convert array to string and save
}

// Retrieve cars array from localStorage
function retrieve() {
    let savedCars = localStorage.getItem('cars'); 
    let savedSaxeli = localStorage.getItem('saxeli'); // Get the string from localStorage
    if (savedCars) {
        cars = JSON.parse(savedCars);  // Convert string back to array
    }
    if (savedSaxeli) {
        saxeli = JSON.parse(savedSaxeli);  // Convert string back to array
    }  else {
        console.log('No cars data found in localStorage');
    }
}
document.getElementById("washla").onclick = function () {
    localStorage.clear();
    cars = [];
    saxeli = [];

}


let box = [];  // This will hold the items

function start() {
    // Loop through each item in the cars array
    for (let i = 0; i < cars.length; i++) {
        // Push each car into the box array
        box.push(cars[i]);

        // Create a new div element
        var div = document.createElement('div');
        
        // Set up the div styles
        div.style.position = "relative";
        div.style.marginTop = "1px";
        div.style.marginLeft = "5px";
        div.style.zIndex = "0";
        div.style.height = "20px";
        div.style.width = "300px";
        div.style.backgroundColor = "red";
        
        // Set the div's text content to the current car value
        div.textContent = cars[i];  // Set the text to the current item from the cars array

        // Append the div to the document body
        document.body.appendChild(div);
    }
}

// Call the start function to run the loop and create the divs
start();


   
  // Attach an event listener to the form to prevent the default submit behavior
  document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Handle form submission logic
    const nameValue = document.querySelector('#name').value;
    console.log('Form submission prevented. Name:', nameValue);
});