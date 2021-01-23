var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr2 = [];
var count = 0;

arr2.push(arr1[0]);

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j])
            count++;
    }
    if (count == 0)
        arr2.push(arr1[i]);
    count = 0;
}

alert(arr2);