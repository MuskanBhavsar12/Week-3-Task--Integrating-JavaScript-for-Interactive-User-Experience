/* =========================
   Welcome Button
========================= */

const welcomeButton = document.getElementById("welcomeButton");
const heroMessage = document.getElementById("heroMessage");

welcomeButton.addEventListener("click", function () {

    heroMessage.textContent =
        "Thank you! JavaScript is working successfully.";

    welcomeButton.textContent = "Clicked ✓";

});


/* =========================
   Dark Mode
========================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


/* =========================
   Mobile Menu
========================= */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* =========================
   Contact Form Validation
========================= */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();


    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


    /* Check empty fields */

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    /* Check email format */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }


    /* Success message */

    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    formMessage.style.color = "green";


    /* Clear form */

    contactForm.reset();

});