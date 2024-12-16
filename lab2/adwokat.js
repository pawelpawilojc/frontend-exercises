document.addEventListener("DOMContentLoaded", () => {
    document.getElementById(
        "date"
    ).textContent = `${new Date().toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })}, ${new Date().toLocaleTimeString("pl-PL", {
        hour: "2-digit",
        minute: "2-digit",
    })}`;
});

function confirmRedirect() {
    return confirm("Czy na pewno?");
}

const recipeLink = document.getElementById("recipeLink");
const passwordField = document.getElementById("passwordField");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const wrongPassword = document.getElementById("wrongPassword");

function verifyPassword() {
    const password = passwordInput.value;
    if (password === "tajne") {
        const secretHref = recipeLink.href + "tajne/adwokat-przepis.html";
        window.location.href = secretHref;
    } else {
        wrongPassword.style.display = "block";

        submitPassword.style.animation = "shake 0.3s";
        setTimeout(() => {
            submitPassword.style.animation = "";
        }, 300);
        passwordInput.value = "";
    }
}

recipeLink.addEventListener("click", (e) => {
    e.preventDefault();
    passwordField.style.display = "block";
});

submitPassword.addEventListener("click", verifyPassword);

passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        verifyPassword();
    }
});

passwordInput.addEventListener("input", () => {
    wrongPassword.style.display = "none";
});

const filters = document.querySelectorAll('input[name="filter"]');
const cakeImage = document.getElementById("cakeImage");

filters.forEach((filter) => {
    filter.addEventListener("change", (e) => {
        const filterValue = e.target.value;

        switch (filterValue) {
            case "sepia":
                cakeImage.style.filter = "sepia(100%)";
                break;
            case "grayscale":
                cakeImage.style.filter = "grayscale(100%)";
                break;
            case "invert":
                cakeImage.style.filter = "invert(100%)";
                break;
            default:
                cakeImage.style.filter = "none";
                break;
        }
    });
});

borderCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        cakeImage.classList.add("bordered");
    } else {
        cakeImage.classList.remove("bordered");
    }
});
