const gradient = require('gradient-string');
const fs = require('fs');
const x = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

// Create a detailed fire gradient with more colors
const fire = gradient([
  { color: '#ff0000', pos: 0 },    // red
  { color: '#ff5f00', pos: 0.25 }, // orange-red
  { color: '#ff8700', pos: 0.5 },  // orange
  { color: '#ffd700', pos: 0.75 }, // gold
  { color: '#ffff00', pos: 1 }     // yellow
]);

function phoenix(text) {
  console.log(fire(text))
}

// Create a matcha gradient
const matcha = gradient([
  { color: '#355E3B', pos: 0 },     // Dark green
  { color: '#61892F', pos: 0.25 },  // Deep green
  { color: '#8FBF5C', pos: 0.5 },   // Medium green
  { color: '#B7E043', pos: 0.75 },  // Light green
  { color: '#D0F36B', pos: 1 }      // Pale green
]);

// Example string
function matchaa(text) {
  console.log(matcha(text))
}

// Create a rainbow gradient
const rainbow = gradient([
  { color: '#ff0000', pos: 0 },    // Red
  { color: '#ff7f00', pos: 0.166 },// Orange
  { color: '#ffff00', pos: 0.332 },// Yellow
  { color: '#00ff00', pos: 0.498 },// Green
  { color: '#0000ff', pos: 0.664 },// Blue
  { color: '#4B0082', pos: 0.83 }, // Indigo
  { color: '#9400D3', pos: 1 }     // Violet
]);

// Example string
function rainboww(message) {
  console.log(rainbow(message));
}

// Create a "Barbie Girl" gradient
const barbieGirl = gradient([
  { color: '#ff6ec7', pos: 0 },    // Pink
  { color: '#ff3b3b', pos: 0.5 },  // Red
  { color: '#ff6ec7', pos: 1 }     // Pink again
]);

function punkypink(text) {
  console.log(barbieGirl(text))
}
const availableColors = ["Phoenix", "Rainbow", "Matcha", "Punky Pink" ]
if (!x.design.theme in availableColors) return console.log("Theme is undefined.")
function select(text) {
  if (x.design.theme === "Phoenix") return phoenix(text)
  if (x.design.theme === "Matcha") return matchaa(text)
  if (x.design.theme === "Rainbow") return rainboww(text)
  if (x.design.theme === "Punky Pink") return punkypink(text)
}
const hwy = function(text) {
  select(text)
}
function logger(text) {
  hwy(text)
}
module.exports = logger