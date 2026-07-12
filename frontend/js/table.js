/**
 * Load all placement requests
 */
async function loadRequests() {

    try {

        allRequests = await getRequests();

        applyFilters();

    } catch (error) {

        console.error(error);

        showToast("Failed to load placement requests", "error");

    }

}



/**
 * Render placement table
 */
function renderTable(requests) {

    const tableBody = document.getElementById("tableBody");

    if (requests.length === 0) {

        showEmptyState();

        return;

    }

    tableBody.innerHTML = "";

    requests.forEach(request => {

        tableBody.innerHTML += `
            <tr>

                <td>${request.id}</td>

                <td>${request.date}</td>

                <td>${request.company_name}</td>

                <td>${request.session}</td>

                <td>${request.round_name}</td>

                <td>${request.remarks ?? ""}</td>

                <td>

                    <button
                        class="action-btn edit-btn"
                        onclick="editRequest(${request.id})">

                        Edit

                    </button>

                    <button
                        class="action-btn delete-btn"
                        onclick="deletePlacement(${request.id})">

                        Delete

                    </button>

                </td>

            </tr>
        `;

    });

}



/**
 * Search + Session Filter
 */
function applyFilters() {

    const keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const session = document
        .getElementById("sessionFilter")
        .value;

    const filtered = allRequests.filter(request => {

        const companyMatch = request.company_name
            .toLowerCase()
            .includes(keyword);

        const sessionMatch =
            session === "All" ||
            request.session === session;

        return companyMatch && sessionMatch;

    });

    renderTable(filtered);

}



/**
 * Delete Placement Request
 */
async function deletePlacement(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this placement request?"
    );

    if (!confirmDelete) return;

    try {

        await deleteRequest(id);

        showToast(
            "Placement request deleted successfully"
        );

        await loadRequests();

    } catch (error) {

        console.error(error);

        showToast(
            "Failed to delete placement request",
            "error"
        );

    }

}