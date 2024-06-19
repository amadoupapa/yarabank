// Fonction pour récupérer les données des pays depuis l'API et ajouter la traduction en français si disponible
function fetchCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const selectElements = document.querySelectorAll('.country-list'); // Sélectionne toutes les listes déroulantes de pays

            // Pour chaque liste déroulante de pays
            selectElements.forEach(selectElement => {
                // Trie les pays par ordre alphabétique
                data.sort((a, b) => {
                    const countryNameA = a.translations.fr || a.name.common;
                    const countryNameB = b.translations.fr || b.name.common;
                    return countryNameA.localeCompare(countryNameB);
                });

                // Ajoute chaque pays à la liste déroulante avec sa traduction en français si disponible
                data.forEach(country => {
                    const option = document.createElement('option');
                    // Utilise la traduction en français si disponible, sinon le nom en anglais
                    const countryName = country.translations.fr || country.name.common;
                    option.value = countryName;
                    option.textContent = countryName;
                    selectElement.appendChild(option);
                });
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données des pays :', error));
}

// Appel de la fonction pour récupérer les données des pays au chargement de la page
window.onload = fetchCountries;


// Ajout du calendrier en Jquery //

const date = document.querySelector('.datepicker');
M.Datepicker.init(date,{format:'d-mmm-yyyy'});

// Validation email de confirmation //

function validateMail(p1, p2) {
if (p1.value != p2.value || p1.value == '' || p2.value == '') {
    p2.setCustomValidity('Email incorrect');
} else {
    p2.setCustomValidity('');
}
}
