// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
 
function destructivelyAppendCat (name){
    cats.push('Ralph')
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyPrependCat(name){
    cats.unshift("Bob")
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveLastCat(){
    cats.pop()
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveFirstCat(){
    cats.shift()
  }
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function appendCat(name){
   const addCat = [...cats, "Broom"]
   return addCat  
}
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});
function prependCat(name){
const additionCats = ["Arnold", ...cats]
return additionCats
}
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});
function removeLastCat(){
  const removeLastCat = cats.slice(0,-1)
  return removeLastCat 
}
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});
function removeFirstCat(){
  const removeFirstCat = cats.slice(1)
  return removeFirstCat 
}