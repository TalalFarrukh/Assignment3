var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

var x1, x2, x3, x4;

for (var i = 0; i < aCities.length; i++) {
    for (var j = 0; j < o.length; j++) {
        if (i == 0 || o[j] == "st")
            x1 = o[j];
        else if (i == 1 || o[j] == "nd")
            x2 = o[j];
        else if (i == 2 || o[j] == "rd")
            x3 = o[j];
        else
            x4 = o[j];
    }
}

alert("1" + x1 + " choice is " + aCities[0] + "\n2" + x2 + " choice is " + aCities[1] + "\n3" + x3 + " choice is " + aCities[2]);
