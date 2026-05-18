async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        // console.log("Fetched Users:", data);
        return data;

    } catch (error) {
        console.error("Failed to fetch data:", error.message);
        return [];
    }
}
async function main() {
    const data = await fetchUsers();
    console.log(data);

    // modifying fetched user data to have active and order properties for refactoring as per code snippet provided in ticket 521
    const users = data.map(user => ({
        ...user,
        active: user.id % 2 === 0,
        orders: [
            { id: 1, amount: 120 },
            { id: 2, amount: 50 }
        ]
    }));

    let premiumOrders = [];

    // We have to refactor this, given in Ticket 521
    for (let i = 0; i < users.length; i++) {
        if (users[i].active) {
            for (let j = 0; j < users[i].orders.length; j++) {
                if (users[i].orders[j].amount > 100) {
                    premiumOrders.push(users[i].orders[j]);
                }
            }
        }
    }

    console.log("Original:", premiumOrders);

    // REFACTORED VERSION

    // Improved readability by removing nested loops
    // easy to understand
    // directly operating on users using filter instead of creating a separate list and then opearting on it

    const refactoredPremiumOrders = users
        .filter(user => user.active)
        .flatMap(user => user.orders)
        .filter(order => order.amount > 100);

    console.log("Refactored:", refactoredPremiumOrders);
}

main();