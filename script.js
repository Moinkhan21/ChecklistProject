// Array containing objects with id and name properties
const arrayOfObjects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Grace' },
    { id: 8, name: 'Hannah' },
    { id: 9, name: 'Ivy' },
    { id: 10, name: 'Jack' }
];

// Reference to the container where checkboxes will be added
const checkboxContainer = document.getElementById('checkbox-container');
// Reference to the div where selected names will be displayed
const selectedNamesDiv = document.getElementById('selected-names');

// Array to store the names of selected checkboxes
let selectedNames = [];

// Function to create and display checkboxes dynamically based on the array
function displayCheckboxes() {
    // Iterate over each object in the array
    arrayOfObjects.forEach(obj => {
        const label = document.createElement('label'); // Create a label element
        const checkbox = document.createElement('input'); // Create a checkbox input element
        checkbox.type = 'checkbox'; // Set input type to checkbox
        checkbox.value = obj.name; // Set the value of checkbox to the name
        
        checkbox.style.display = 'none'; // Hide the default checkbox

        const customCheckbox = document.createElement('div'); // Create a custom checkbox element
        customCheckbox.className = 'custom-checkbox'; // Assign class for styling

        // Style the label element
        label.style.fontSize = '1.1rem';
        label.style.fontWeight = '600';
        label.style.color = '#0000cd';
        label.style.cursor = 'pointer';

        // Add event listener to the checkbox for changes
        checkbox.addEventListener('change', (event) => {
            updateSelectedNames(event); // Update selected names
            customCheckbox.classList.toggle('checked', checkbox.checked); // Toggle the checked state
        });

        // Append the checkbox, custom checkbox, and name text to the label
        label.appendChild(checkbox);
        label.appendChild(customCheckbox);
        label.appendChild(document.createTextNode(obj.name));

        // Append the label and a line break to the checkbox container
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement('br'));
    });
}

// Function to update the array of selected names and display them
function updateSelectedNames(event) {
    const name = event.target.value; // Get the name from the checkbox value
    if (event.target.checked) {
        selectedNames.push(name); // Add the name to the array if checked
    } else {
        selectedNames = selectedNames.filter(n => n !== name); // Remove the name if unchecked
    }
    displaySelectedNames(); // Update the display of selected names
}

// Function to display the selected names in the DOM
function displaySelectedNames() {
    selectedNamesDiv.style.fontWeight = '600'; // Set text styling
    selectedNamesDiv.style.color = '#0000cd'; // Set text color
    selectedNamesDiv.innerHTML = selectedNames.join(', '); // Join the array into a string and display
}

// Initial call to display checkboxes when the script loads
displayCheckboxes();
