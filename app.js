//Michael Garcia
var isSirenPlaying = false; // Variable to track if the siren is currently playing

// Function to navigate to a specific page by showing/hiding the corresponding div element
function navigateToPage(pageId) {
  // Hide all pages
  const pages = document.getElementsByTagName("div");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = "block";
}

// Function to toggle the visibility of the menu items
function toggleMenu() {
  const menuItems = document.getElementById("menu-items");
  menuItems.style.display = menuItems.style.display === "none" ? "block" : "none";
}

// Function to confirm help by playing a siren sound and displaying an alert
function confirmHelp() {
  var sirenSound = document.getElementById("siren-sound");

  if (!sirenSound.paused) {
    // If the siren is currently playing, pause and reset it
    sirenSound.pause();
    sirenSound.currentTime = 0;
  } else {
    // If the siren is not playing, start playing it and display the alert
    sirenSound.play();
    alert("Help is on the way!");
  }
}
// Function to save the profile information and add it to the table
function saveProfile(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form inputs
  const fullName = document.getElementById("full-name").value;
  const contactInfo = document.getElementById("contact-info").value;
  const password = document.getElementById("password").value;

  // Perform validation
  if (fullName.trim() === "" || contactInfo.trim() === "" || password.trim() === "") {
    // If any field is empty, display an alert and exit the function
    alert("Please fill in all the fields.");
    return;
  }

  // Create a new table row
  const newRow = document.createElement("tr");

  // Create table data cells for each input value
  const fullNameCell = document.createElement("td");
  fullNameCell.textContent = fullName;

  const contactInfoCell = document.createElement("td");
  contactInfoCell.textContent = contactInfo;

  const passwordCell = document.createElement("td");
  passwordCell.textContent = password;

  // Append the cells to the row
  newRow.appendChild(fullNameCell);
  newRow.appendChild(contactInfoCell);
  newRow.appendChild(passwordCell);

  // Append the row to the table body
  const userTable = document.getElementById("user-table");
  const tableBody = userTable.getElementsByTagName("tbody")[0];
  tableBody.appendChild(newRow);

  // Show confirmation message
  const confirmationMessage = "Profile saved and added to the table!";
  alert(confirmationMessage);

  // Reset the form
  event.target.reset();
}