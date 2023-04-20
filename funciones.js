

function CargarPokemones() {
  document.querySelector("#listado").innerHTML = "";

  document.querySelector("#Card").innerHTML ="";
  
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=33")
    .then((result) => {
      const pokemones = result.data.results;
        console.log(pokemones);
      pokemones.map((pokemon) => {
        const { name, url } = pokemon;
        console.log(url)
        
        document.querySelector("#listado").innerHTML += `<img class="tamanoImgS columna centerr" src="Imagenes/pngegg.png" onclick="UnPokemon('${url}')" alt="Card image cap">`;
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
  document.querySelector("#Card").innerHTML = `<div class="centerr">
  <div class="card lll contenedor2 CardCircular Borde" style="width: 20rem; heigth:auto;">
    <ul id="Foto"></ul>
    <div class="card-body FondoNegroFull Borde">
  
  
      <div class="columna">
      <p>Pokemon: </p>
      <ul id="Nombre"></ul>
      </div>
    
      <p>Tipos: </p>
      <ul id="Tipo"></ul>
      

      
    <br>
    <br>
    <br>

    
  </div>
</div>
</div>
</div>
</div>
</div>`;

  axios
    .get(url)
    .then((result) => {
      const pokemon =result.data;
      console.log(pokemon);
      
        const { moves, name,sprites,types } = pokemon;
        document.querySelector("#Foto").innerHTML = `<img class="card-img-top tamanoImg centerr" src=${sprites.front_default} alt="Card image cap">`;
        document.querySelector("#Nombre").innerHTML = `<p class="color1">${name}</p>`;
        types.map((types) => {
          const { type} = types;
          
          document.querySelector("#Tipo").innerHTML += `<p class="color1">${type.name}</p>`;
        
          
        });
      
      

      
    })
    .catch((error) => {
      console.log(error);
    });
}