document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    if (contactForm && successMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            successMessage.textContent =
                "Your message has been sent successfully!";

            contactForm.reset();

            setTimeout(function () {
                successMessage.textContent = "";
            }, 3000);

        });

    }

});
