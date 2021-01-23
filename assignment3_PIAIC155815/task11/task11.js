var items = ["cake", "apple pie", "cookie", "chips", "patties"];

var userinput = prompt("Welcome to ABC Bakery. What would you like to order?");
var x = 0;

for (var i = 0; i < items.length; i++) {
    if (userinput == items[i]) {
        alert(items[i] + " is available at index " + i + " in our bakery");
        x++; break;
    }
}

if (x == 0)
    alert("We are sorry " + userinput + " is not available in our bakery");