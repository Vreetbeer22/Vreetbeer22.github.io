const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Toon of verberg het menu wanneer op de knop wordt geklikt
    dropdownButton.addEventListener('click', (event) => {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      event.stopPropagation(); // Voorkom dat de klik ook op het document geregistreerd wordt
    });

    // Verberg het menu wanneer je buiten het dropdown-menu klikt
    document.addEventListener('click', () => {
      dropdownMenu.style.display = 'none';
    });

    // Zorg ervoor dat klikken binnen het menu het menu niet sluit
    dropdownMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });