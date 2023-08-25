function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
    deliveryOrders.push(order);
  }
  return deliveryOrders;
}


function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}

function listItems(orders) {
  var orderNames = [];
  for (var i = 0; i < orders.length; i++) {
    orderNames.push(orders[i].item);
  }
  orderNames = orderNames.toString().replaceAll(",", ", ");
  return orderNames;
}

function searchOrder(orders, itemName) {
  var searchResult = false;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === itemName) {
      searchResult = true;
    }
  }
  return searchResult;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}