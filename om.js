const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// const pkmnIds = pokémon.map( p => p.id )

const pkmnIdsD3 = pokemon.filter( p => p.id % 3 === 0);
const firePoke = pokemon.filter( p => p.types === "fire");
const typePoke = pokemon.filter( p => p.types.length > 1);
const pokeNames = pokemon.map( p => p.name);
const pokeNamesId = pokemon.filter( p => p.id > 99).map( p => p.name);
const pokeNamesTypePoison = pokemon.filter( p => p.types === "poison").map( p => p.name);
const pokeNamesTypeTwo = pokemon.filter( p => p.types.length > 1 && p.types[1] === "flying").map( p => p.types[0]);
// const pokeCount = pokemon.filter(p => p.types.includes("normal")).length;
const pokeCount = pokemon.filter((p) => {
  return p.types.includes('normal')
}).length;
console.log(pokeCount)