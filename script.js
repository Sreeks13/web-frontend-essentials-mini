document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#book-request-form");
    const message = document.querySelector("#form-message");

    if (!form || !message) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const book = document.querySelector("#book").value.trim();

        if (name && book) {
            message.textContent = `Thank you, ${name}. Your request for "${book}" has been submitted.`;
        } else {
            message.textContent = "Please fill in all fields.";
        }
    });
});