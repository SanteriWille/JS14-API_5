const api = "https://dattebayo-api.onrender.com/characters"

function search() {
const characterName = document.getElementById("input").value.toLowerCase();

// Fjerner infoen etter nytt søk
const existingContainer = document.querySelectorAll(".container")
existingContainer.forEach(element => element.remove())
// Fjerner det som ble skrivd inn i input etter søk
document.getElementById("input").value = '';

fetch(api)
  .then(response => response.json())
  .then(data => {

    const character = data.characters.find(char => char.name.toLowerCase() === characterName);
    
    if (character) {
    const container = document.createElement('div')
    container.classList.add('container')

    const info = document.createElement('div')
    info.classList.add('info')
    info.innerHTML = `
      <img src="${character.images[0]}" alt="${character.name}">
      <img src="${character.images[1]}" alt="${character.name}">
      <p><strong>Name:</strong> ${character.name}</p>
      <p><strong>Birthdate:</strong> ${character.personal.birthdate}</p>
      <p><strong>Unique Traits:</strong> ${character.jutsu.join(', ')}</p>`
    
    container.appendChild(info);
    document.body.appendChild(container);
    }
  })

  
}