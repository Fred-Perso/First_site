// Remplacez 'YOUR_SPACE_ID' et 'YOUR_ACCESS_TOKEN' par les informations de votre espace Contentful.
const spaceId = '8pvw0ip6a9ui';
const accessToken = '4dR9Ohm74VaxgQyCEc0JcBJij-0XjXcgAjBt-VzQuxU';
const contentTypeId = 'DD';

// URL de l'API Content Delivery
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${contentTypeId}`;

// Fonction pour récupérer les données depuis Contentful
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.items[0].fields; // Retourne les champs du modèle
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fonction pour afficher les données dans la page HTML
async function displayData() {
    const data = await fetchData();
    const messageElement = document.getElementById('helloWorldMessage');
    
    if (data && data.message) {
        messageElement.textContent = data.message;
    } else {
        messageElement.textContent = 'Message not available';
    }
}

// Appel de la fonction pour afficher les données lors du chargement de la page
window.onload = displayData;
