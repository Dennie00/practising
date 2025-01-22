
const searchBtn = document.getElementById("searchBtn");
const pokemonBox = document.getElementById("pokemonContainer");

searchBtn.addEventListener("click", () => {
  fetchData();
} );


async function fetchData() {
  
  try {
    const pokemonInput = document.getElementById("pokemonInput");
    const pokemonName = pokemonInput.value.toLowerCase();

    if (pokemonName === "") {
      pokemonBox.innerHTML = `<h2>Zadejte prosím platnou hodnotu</h2>`;
      pokemonBox.style.display = "flex";
      return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


    if(!response.ok) {
      throw new Error("Couldn't fetch resource");
    }

    const data = await response.json();
    const types = data.types.map(typeInfo => typeInfo.type.name);

    const typesHTML = types.map(type => `<span class="pokemonType ${type}">${type}</span>`)
    .join(' ');


   
      pokemonBox.innerHTML = `<h2>${data.name}</h2>
                              <img alt="${data.name} sprites" src=${data.sprites.front_default}>
                              <p>ID: ${data.id}</p>
                              <p>${typesHTML}</p>`   
      pokemonBox.style.display = "flex";
    
         

  } catch (error) {
    pokemonBox.innerHTML = `<h2>Pokémon nenalezen nebo došlo k chybě</h2>`;
    pokemonBox.style.display = "flex";
    console.error(error);
  };
  
  pokemonInput.value = ""


}