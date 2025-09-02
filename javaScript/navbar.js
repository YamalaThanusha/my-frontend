// // Get elements
let about1 = document.getElementById("about1");
let report1 = document.getElementById("report1");
let content1 = document.getElementById("content1");
let about = document.getElementById("about");
let report = document.getElementById("report");
let content = document.getElementById("content");

// Function to show only the selected section
function showSection(section) {
    // Hide all sections
    about.style.display = "none";
    report.style.display = "none";
    content.style.display = "none";

    //Show the selected section
    section.style.display = "flex";
}

// Event listeners for navbar links
about1.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents jumping
    showSection(about);
});

report1.addEventListener("click", function(event) {
    event.preventDefault();
    showSection(report);
});

content1.addEventListener("click", function(event) {
    event.preventDefault();
    showSection(content);
});
