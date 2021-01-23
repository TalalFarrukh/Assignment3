var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count = 0;
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
        if (a[i] == b[j])
            count++;
    }
    if (count == 0)
        b.push(a[i]);
    count = 0;
}

alert(b);