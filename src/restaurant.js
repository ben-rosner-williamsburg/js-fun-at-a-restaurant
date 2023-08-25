function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}

function addMenuItem(restaurant, item) {
  var meal = item.type;
  if (!restaurant.menus[meal].includes(item)) {
    restaurant.menus[meal].push(item);
  }
  return restaurant;
}

function removeMenuItem(restaurant, itemName, meal) {
  var message = "";
  if (!restaurant.menus[meal].includes(meal)) {
    message = `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
  for (var i = 0; i < restaurant.menus[meal].length; i++) {
    if (restaurant.menus[meal][i].name === itemName) {
      restaurant.menus[meal].splice(i);
      message = `No one is eating our ${itemName} - it has been removed from the ${meal} menu!`;
    }
  }
  return message;
}

function checkForFood(restaurant, foodItem) {
  var message = "";
  if (restaurant.menus[foodItem.type].includes(foodItem)) {
    message = `Yes, we're serving ${foodItem.name} today!`;
  }
  else {
    message = `Sorry, we aren't serving ${foodItem.name} today.`;
  }
  return message;
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
  checkForFood
}