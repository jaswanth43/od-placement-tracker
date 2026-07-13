const BASE_URL = "https://od-placement-tracker.onrender.com";

/**
 * Get all placement requests
 */
async function getRequests() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch placement requests.");
    }

    return await response.json();
}

/**
 * Get placement request by ID
 */
async function getRequestById(id) {
    const response = await fetch(`${BASE_URL}${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch placement request.");
    }

    return await response.json();
}

/**
 * Create placement request
 */
async function createRequest(data) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Failed to create placement request.");
    }

    return await response.json();
}

/**
 * Update placement request
 */
async function updateRequest(id, data) {
    const response = await fetch(`${BASE_URL}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Failed to update placement request.");
    }

    return await response.json();
}

/**
 * Delete placement request
 */
async function deleteRequest(id) {
    const response = await fetch(`${BASE_URL}${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete placement request.");
    }

    return await response.json();
}
