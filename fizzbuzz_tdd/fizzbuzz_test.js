function fizzbuzz(input) {
  var fizz = ['fizz'];
  var buzz = ['buzz'];

  var output = fizz[input % 3] + '' + buzz[input % 5];
  var match = output.match(/fizz|buzz/g);

  if (match)
    return match.join("");
  else
    return input;
}

for(i=1; i <= 100; i++) {
 console.log(fizzbuzz(i));
}

function oldfizzbuzz(input) {
  if(isFizzBuzzable(input))
    output = "fizzbuzz";
  else if(isFizzable(input))
     output = "fizz";
  else if(isBuzzable(input))
    output = "buzz";
  else
    output = input;

  return output;
}

function isFizznuzzable(input) {
  return (isFizzable(input) && isBuzzable(input))
}

function isFizzable(input) {
  return (input % 3 == 0)
}

function isBuzzable(input) {
  return (input % 5 == 0)
}

test("When I enter 1, I should get 1 back", function() {
  var value = fizzbuzz(1);
  equal(value, 1);
});

test("When I enter 2, I shoudl get back 2", function() {
  var value = fizzbuzz(2);
  equal(value, 2);
});

test("When I enter a multiple of 3, I shoudl get back fizz", function() {
  equal(fizzbuzz(3), "fizz");
});

test("When i enter a multiple of 5, I should get back buzz", function() {
  equal(fizzbuzz(10), "buzz");
})

test("When i enter a multiple of 15, i should get back fizzbuzz", function() {
  equal(fizzbuzz(15), "fizzbuzz");
});

test("WHen I enter 50, I should get back buzz", function() {
	equal(fizzbuzz(50), "buzz);
});


