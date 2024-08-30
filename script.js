document.getElementById("toggle-info-btn").addEventListener("click", function() {
    const personalInfoSection = document.getElementById("personal-info");
    if (personalInfoSection.style.display === "none" || personalInfoSection.style.display === "") {
        personalInfoSection.style.display = "block";
    } else {
        personalInfoSection.style.display = "none";
    }
});
