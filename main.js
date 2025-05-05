document.addEventListener('DOMContentLoaded', () => {
    // Fetch menu items from backend API
    fetch('http://localhost:3000/api/menu')
        .then(response => response.json())
        .then(data => {
            const specialsContainer = document.getElementById('specials-container');
            
            // Display first item from each category as today's special
            Object.keys(data).forEach(category => {
                if (data[category].length > 0) {
                    const item = data[category][0];
                    const itemElement = document.createElement('div');
                    itemElement.className = 'menu-item';
                    itemElement.innerHTML = `
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <span class="price">$${item.price.toFixed(2)}</span>
                    `;
                    specialsContainer.appendChild(itemElement);
                }
            });
        })
        .catch(error => console.error('Error fetching menu:', error));

    // Menu button click handler
    document.getElementById('menu-btn').addEventListener('click', () => {
        window.location.href = '/menu.html';
    });
});