// Write your solution here!
let cats = ["Milo", "Otis", "Garfiel"]
//pop add elemen "kim" to the end
function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
  }
  console.log(destructivelyAppendCat("kim"));

  //unshift adds argument meow as the first element
  function destructivelyPrependCat(name) {
    cats.unshift(name);
    console.log(cats);
  }
  destructivelyPrependCat("meow")

  //pop remove the last element
  function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
  }
  destructivelyRemoveLastCat()

  //shift remove the first element
  function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
  }
  destructivelyRemoveFirstCat()

  //spread operator
  function appendCat(name) {
    return [...cats, name];
    console.log(cats);
  }
  console.log(appendCat("bosco"));
  
  function prependCat(name) {
    return [name, ...cats];
    console.log(cats);
  }
  console.log(prependCat("blue"))

  //slice it cuts the arrray starting from index o
  function removeLastCat() {
    return cats.slice(0, -1);
    console.log(cats);
  }
  console.log(removeLastCat())


  function removeFirstCat() {
    return cats.slice(1);
    console.log(cats);
  }
  console.log(removeFirstCat())
  
