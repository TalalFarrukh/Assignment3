var a = [], b = [], c = [], d = [], e = [];

//a
for (var i = 0; i < 15; i++)
    a.push(i + 1);
alert("a: " + a);

//b
for (var j = 10; j > 0; j--)
    b.push(j);
alert("b: " + b);

//c
c.push(0);
for (var k = 1; k <= 20; k++) {
    if (k % 2 == 0)
        c.push(k);
}
alert("c: " + c);

//d
for (var l = 1; l <= 20; l++) {
    if (l % 2 != 0)
        d.push(l);
}
alert("d: " + d);

//e
for (var g = 1; g <= 20; g++) {
    if (g % 2 == 0)
        e.push(g + "k");
}
alert("e: " + e);