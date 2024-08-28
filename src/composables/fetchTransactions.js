import { useAuthStore } from "@/stores/authStores";

export const useFetchTransactions = async (userId) => {
    try {
        // Construct the URL with the userId as a query parameter
        const url = `http://localhost:3000/user/transactions?userId=${encodeURIComponent(userId)}`;
        console.log("userId", userId);
        // Make the fetch request
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response is OK (status in the range 200-299)
        console.log("response", response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse and return the JSON data
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching transactions:', error);
        // Handle or rethrow the error as needed
    }
};
