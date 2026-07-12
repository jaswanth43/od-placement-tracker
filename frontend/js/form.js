/**
 * Initialize Placement Form
 */
function initializeForm() {

    const form = document.getElementById("placementForm");

    form.addEventListener("submit", submitForm);

}



/**
 * Add / Update Request
 */
async function submitForm(event) {

    event.preventDefault();

    const submitButton = document.querySelector(
        "button[type='submit']"
    );

    const data = {

        date: document.getElementById("date").value,

        company_name: document
            .getElementById("company")
            .value
            .trim(),

        session: document
            .getElementById("session")
            .value,

        round_name: document
            .getElementById("round")
            .value,

        remarks: document
            .getElementById("remarks")
            .value
            .trim()

    };



    // Validation

    if (!data.date) {

        showToast("Please select a date.", "error");

        return;

    }

    if (data.company_name.length < 3) {

        showToast(
            "Company name must contain at least 3 characters.",
            "error"
        );

        return;

    }

    if (data.remarks.length > 200) {

        showToast(
            "Remarks cannot exceed 200 characters.",
            "error"
        );

        return;

    }



    try {

        if (editingId === null) {

            setButtonLoading(submitButton, "Adding...");

            await createRequest(data);

            showToast(
                "Placement request added successfully!"
            );

        } else {

            setButtonLoading(submitButton, "Updating...");

            await updateRequest(editingId, data);

            showToast(
                "Placement request updated successfully!"
            );

            resetEditMode();

        }

        clearForm();

        await loadRequests();

    } catch (error) {

        console.error(error);

        showToast(
            "Something went wrong!",
            "error"
        );

    } finally {

        resetButton(submitButton);

    }

}



/**
 * Edit Placement Request
 */
async function editRequest(id) {

    const request = allRequests.find(
        request => request.id === id
    );

    if (!request) return;

    document.getElementById("date").value =
        request.date;

    document.getElementById("company").value =
        request.company_name;

    document.getElementById("session").value =
        request.session;

    document.getElementById("round").value =
        request.round_name;

    document.getElementById("remarks").value =
        request.remarks ?? "";

    editingId = id;

    document.querySelector(
        "button[type='submit']"
    ).textContent = "Update Request";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}