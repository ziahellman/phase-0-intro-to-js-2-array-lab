// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat() {
  const newCats = [...cats, "Broom"];
  return newCats;
}
function prependCat() {
  const newerCats = ["Arnold", ...cats];
  return newerCats;
}

function removeLastCat() {
  const removedCats = cats.slice(0, cats.length - 1);
  return removedCats;
}
function removeFirstCat() {
  const firstCat = cats.slice(1);
  return firstCat;
}
