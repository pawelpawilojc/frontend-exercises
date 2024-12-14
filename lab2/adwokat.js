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
