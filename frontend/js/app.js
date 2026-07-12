let editingId = null;
let allRequests = [];

window.onload = function () {

    initializeForm();

    loadRequests();

    document
        .getElementById("searchInput")
        .addEventListener("input", applyFilters);

    document
        .getElementById("sessionFilter")
        .addEventListener("change", applyFilters);

};