
const RAW_GAMES = [
  { id: 1, title: "The Legend of Zelda", genre: "Adventure", favorite: true },
  { id: 2, title: "Elden Ring", genre: "RPG", favorite: true },
  { id: 3, title: "Stardew Valley", genre: "Simulation", favorite: false },
  { id: 4, title: "Cyberpunk 2077", genre: "RPG", favorite: false },
  { id: 5, title: "Hades", genre: "Roguelike", favorite: true }
];

//function that returns only games where favorite is true 
function getFavoriteGames(gamesObjects){
  return gamesObjects.filter(game => game.favorite === true);
}

//function that takes array of game objects to return an array of just strings
function getGameTitles(gamesObjects){
  return gamesObjects.map(game => game.title);
}


//test
console.log("---Favorite Game Titles----");
const favoriteTitles = getGameTitles(getFavoriteGames(RAW_GAMES));
console.log(favoriteTitles);

console.log("---Favorite Games---");
const favoriteGames = getFavoriteGames(RAW_GAMES);
console.log(favoriteGames);