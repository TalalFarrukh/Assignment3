var A = [20, 53, 78, 4, 91, 12];
var temp;

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length - 1; j++) {
        if (A[j] > A[j + 1]) {
            temp = A[j + 1];
            A[j + 1] = A[j];
            A[j] = temp;
        }
    }
}

alert(A);