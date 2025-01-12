// Select the hamburger menu and the navigation menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Add click event listener to toggle the menu
hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked!"); 
    menu.classList.toggle("active"); // Toggle the 'active' class
    console.log("Menu classes:", menu.classList);
    console.log("Menu element styles:", getComputedStyle(menu));
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const action = form.action;

    fetch(action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Failed to send the message.");
                }
            });
        }
    }).catch(error => {
        alert("Failed to send the message: " + error.message);
    });
});
