
let pokemonList = [
    {name:'Beedrill', height:" 3' 03 ",types:['bug', 'poison']},
    {name:'Butterfree', height:" 3'07 ",types:['bug', 'flying']},
    {name:'Pikachu', height:"1' 04 ",types:['elektric']},
    {name:'Magneton', height:"3' 03 ",types:['electric', 'steel']},
    {name:'Jynx', height:"4' 07 ",types:['ice', 'psychic']},
    ];

    // Iterating the List and print result

    for (let i=0; i < pokemonList.length; i++) {

        if (pokemonList[i].height > "3' 03 ") {
            document.write(pokemonList[i].name + " is " + pokemonList[i].height +  " tall, " + "Waw - that is BIG!");
        }
        else{
            document.write(pokemonList[i].name + " is " + pokemonList[i].height + " tall, ");
        }
    }




     