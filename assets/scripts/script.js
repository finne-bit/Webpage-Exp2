// Fetch data from JSON file
fetch('assets/scripts/data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('idCardContainer');
        // Loop through the data to create ID cards
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('id-card');

            card.innerHTML = `
                <img src="${item.path}" alt="Foto ${item.nama}">
                <h2>${item.nama}</h2>
                <p>${item.jabatan}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));