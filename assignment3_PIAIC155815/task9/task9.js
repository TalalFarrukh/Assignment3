var A = [24, 53, 78, 91, 12];
var x = 0;

for (var i = 0; i < A.length; i++) {
    if (A[i] > x)
        x = A[i];
}

alert("Largest number = " + x);