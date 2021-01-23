var colors = [];
//a
var x = prompt("What color do you want to add at the beginning?");
colors.unshift(x);
//b
x = prompt("What color do you want to add at the end?");
colors.push(x);
alert(colors);
//c
colors.unshift("Blue"); colors.unshift("Black");
alert(colors);
//d and e
colors.shift(); alert(colors);
colors.pop(); alert(colors);
//f
x = parseInt(prompt("At which index do you want to insert the color?"));
var x2 = prompt("What should be the color?");
colors.splice(x, 0, x2);
alert(colors);
//g
x = parseInt(prompt("At which index do you want to delete the color?"));
x2 = parseInt(prompt("How many elements do you want to remove?"));
colors.splice(x, x2);
alert(colors);