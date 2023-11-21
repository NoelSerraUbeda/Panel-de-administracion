function toggleFilterForm() {
    var filterForm = document.getElementById("filterForm");
    var currentDisplay = filterForm.style.display;

    if (currentDisplay === "flex") {
        filterForm.style.display = "none";
    } else {
        filterForm.style.display = "flex";
    }
}
