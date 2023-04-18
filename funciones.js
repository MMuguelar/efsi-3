

function CargarPokemones() {
  document.querySelector("#listado").innerHTML = "";
  document.querySelector("#Foto").innerHTML = "";
  document.querySelector("#Tipo").innerHTML ="";
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((result) => {
      const pokemones = result.data.results;
        console.log(pokemones);
      pokemones.map((pokemon) => {
        const { name, url } = pokemon;
        console.log(url)
        document.querySelector("#listado").innerHTML += `<li><button onclick="UnPokemon('${url}')">${name}</button></li>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function UnPokemon(url)
{
  console.log("llego a la funcion");
  document.querySelector("#listado").innerHTML = "";

  axios
    .get(url)
    .then((result) => {
      const pokemon =result.data;
      console.log(pokemon);
      
        const { moves, name,sprites,types } = pokemon;
        document.querySelector("#Foto").innerHTML = `<img class="card-img-top tamanoImg" src=${sprites.front_default} alt="Card image cap">`;
        document.querySelector("#Nombre").innerHTML = `<h3 class="card-title color1">${name}</h3>`;
        types.map((types) => {
          const { type} = types;
        
          document.querySelector("#Tipo").innerHTML = `<button class="CardButtom">${type.name}</button>`;
        });
      
      

      
    })
    .catch((error) => {
      console.log(error);
    });
}