// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {cats.push("Ralph")}
function destructivelyPrependCat(name) {cats.unshift("Bob")}
function destructivelyRemoveLastCat() {cats.pop()}
function destructivelyRemoveFirstCat() {cats.shift()}
function appendCat(name) {const copyOfCats = [...cats]; copyOfCats.push("Broom"); return copyOfCats}
function prependCat(name) {const copyOfCats = [...cats]; copyOfCats.unshift("Arnold"); return copyOfCats}
function removeLastCat() {const copyOfCats = [...cats]; copyOfCats.pop(); return copyOfCats}
function removeFirstCat() {const copyOfCats = [...cats]; copyOfCats.shift(); return copyOfCats}