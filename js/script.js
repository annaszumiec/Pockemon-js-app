let pokemonRepository = (function () {
let repository = [
    {name:'Beedrill', height:" 3' 03 ",types:[' bug ', ' poison ']},
    {name:'Butterfree', height:" 3'07 ",types:[' bug ', ' flying ']},
    {name:'Pikachu', height:"1' 04 ",types:[' elektric ']},
    {name:'Magneton', height:"3' 03 ",types:[' electric ', ' steel ']},
    {name:'Jynx', height:"4' 07 ",types:[' ice ', ' psychic ']},
    ];
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return repository;
    }
    function addListItem(pokemon){
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      
      // addEventListener on click
      button.addEventListener('click', function (schowDetails) {
        console.log(pokemon);
      });

      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };

    function schowDetails(pokemon) {
      console.log(pokemon)
    }
   
  })();
  
  pokemonRepository.add({ name: "coockie monster", height: "monster", types: ["monster"] });
  
  console.log(pokemonRepository.getAll());
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);


});


     