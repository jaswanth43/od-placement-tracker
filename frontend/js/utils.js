/**
 * Show a toast notification
 * @param {string} message
 * @param {string} type - success | error | warning
 */
function showToast(message, type = "success") {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}



/**
 * Disable button and show loading text
 */
function setButtonLoading(button, text = "Loading...") {

    button.dataset.originalText = button.textContent;

    button.textContent = text;

    button.disabled = true;

}



/**
 * Restore button
 */
function resetButton(button) {

    button.textContent = button.dataset.originalText;

    button.disabled = false;

}



/**
 * Clear form fields
 */
function clearForm() {

    document.getElementById("placementForm").reset();

}



/**
 * Reset form to Add mode
 */
function resetEditMode() {

    editingId = null;

    const button = document.querySelector("button[type='submit']");

    button.textContent = "Add Request";

}



/**
 * Display empty table message
 */
function showEmptyState() {

    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = `
        <tr>
            <td colspan="7" style="padding:20px;text-align:center;">
                No Placement Requests Found
            </td>
        </tr>
    `;

}