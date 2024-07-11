function trackEvent(eventName) {
  var randomRevenue = getRandomRevenue(101);
  
  if (eventName == "ADD_TO_CART") {
    var event_and_custom_data = {
      "currency": "EUR",
      "revenue": randomRevenue,
      "coupon": "coupon_code"
    };

    var customer_event_alias = "Test currency + revenue + coupon fields";

    branch.logEvent(
      "ADD_TO_CART",
      event_and_custom_data,
      customer_event_alias,
      function(err) { console.log(err); }
    );

    setTimeout(function(){alert("Branch " + eventName + " event was tracked with currency, revenue, and coupon data!")},500);
  } 
  else if(eventName == "PURCHASE") {
    var event_and_custom_data = {
      "currency": "EUR",
      "revenue": randomRevenue,
      "coupon": "coupon_code"
    };

    var customer_event_alias = "Test currency + revenue + coupon fields";

    branch.logEvent(
      "PURCHASE",
      event_and_custom_data,
      customer_event_alias,
      function(err) { console.log(err); }
    );

    setTimeout(function(){alert("Branch " + eventName + " event was tracked with currency, revenue, and coupon data!")},500);

  }
  else {
    branch.logEvent(eventName);

    setTimeout(function(){alert("Branch " + eventName + " event was tracked!")},500);
  }
}

function getRandomRevenue(exclusiveMax) {
  return Math.floor(Math.random() * exclusiveMax);
}
