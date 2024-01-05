function handleProduct(productName, priceId) {
  var totalPriceElement = document.getElementById("total-price");
  var currentPrice = parseFloat(totalPriceElement.innerText);

  //      card-price
  var cardPrice = document.getElementById(priceId);
  var price = parseFloat(cardPrice.innerText);
  var totalPrice = currentPrice + price;
  document.getElementById("total-price").innerText = totalPrice;

}
