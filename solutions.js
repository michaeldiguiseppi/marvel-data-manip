var characters = require('./data/characters.json');
var mystique = require('./data/mystique.json');
var series = require('./data/series.json');


// Print every name to terminal
characters.data.results.forEach(function(character) {
  console.log(character.name);
});

// List of character and ID, as an Object.
var characterObj = characters.data.results.reduce(function(prev, curr) {
  prev[curr.name] = curr.id;
  return prev;
}, {});
console.log(characterObj);

// List of character and description as object.  Remove without desc.
var charObj = characters.data.results.reduce(function(prev, character) {
  if (character.description) {
      prev[character.name] = character.description;
      return prev;
  } else {
    return prev;
  }
}, {});
console.log(charObj);

// Array of comics names "Adam Warlock" has been in.
var warlock = characters.data.results.filter(function(character) {
  return character.name === "Adam Warlock";
})[0].comics.items.map(function(comic) {
  return comic.name;
});
console.log(warlock);

// Name of all characters available in less than 10 comics.
var less10 = characters.data.results.filter(function(character) {
  return character.comics.items.length < 10;
}).map(function(char) {
  return char.name;
});
console.log(less10);


//
// /* MYSTIQUE */
//
// // all stories with type of cover.
// var covers = mystique.data.results.forEach(function(result) {
//   return result.stories.items.filter(function(story) {
//     return story.type === 'cover';
//   }).map(function(story) {
//     return story.name;
//   });
// });
// console.log(covers);
