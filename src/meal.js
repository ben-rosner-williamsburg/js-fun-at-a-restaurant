function nameMenuItem(name) {
 return `Delicious ${name}`
}

function createMenuItem(name, price, type){
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)){
    ingredients.push(ingredient);
  }
  return ingredients;
}

function formatPrice(initialPrice){
  return `$${initialPrice}`;
}

function decreasePrice(price){
    var discount = price / 10;
    var newPrice = price - discount;
    return newPrice;
}

function createRecipe(title, ingredients, type){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


