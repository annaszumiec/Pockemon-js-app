
let pokemonList = [
    {name:'Beedrill', height:" 3' 03 ",types:['bug', 'poison']},
    {name:'Butterfree', height:" 3'07 ",types:['bug', 'flying']},
    {name:'Pikachu', height:"1' 04 ",types:['elektric']},
    {name:'Magneton', height:"3' 03 ",types:['electric', 'steel']},
    {name:'Jynx', height:"4' 07 ",types:['ice', 'psychic']},
    ];

pokemonList.forEach(function(pokemon){
    document.write(pokemon.name + ' is ' + pokemon.height + ' tall ' + ' and type :'+pokemon.types);
});


     