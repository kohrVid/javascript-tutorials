var p = new Product({
  name: "test",
  price: {
    amount: 5,
    currency: "USD"
  },
  category: {
    name: "test"
  }
});

console.log(p.displayPrice);

p.price.amount = 20;
p.price.currency = "EUR";
console.log(p.internal.approximatePriceUSD);
console.log(p.displayPrice);

console.log(JSON.stringify(p));

var obj = p.toObject();
console.log(obj.displayPrice);

p.name = 2;
console.log(p.name);
console.log(p.$isValid("name"));

p.price.amount = "Not a number";
p.validate(function(err) {
  console.log(err);
});
