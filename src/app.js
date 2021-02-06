var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count) {
    if (count <= 0)
        return "Number cannot be zero/negative";
    for (var i = 0; i < count; i++) {
        chocolates.unshift(color);
    }
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    let res = []
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (chocolates.length < number)
       return "Insufficient chocolates in the dispenser";
    for (var i = 0; i < number; i++) {
        res.push(chocolates.shift());
    }
    return res
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    let res = []
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (chocolates.length < number)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i < number; i++) {
        res.push(chocolates.pop());
    }
    return res;
}


//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates,number, color) {
    let res = []
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (chocolates.length < number)
        return "Insufficient chocolates in the dispenser";
    var n = chocolates.length - 1;
    while (number > 0) {
        if (chocolates[n] == color) {
            res.push(chocolates.pop());
            number--;
        }
        n--;
    }
    return res;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    var res = [0,0,0,0,0,0,0]
    if (chocolates.length <= 0)
        return [];
    for(var i = 0; i < chocolates.length; i++) {
        if(chocolates[i] == 'green')
            res[0] += 1
        else if(chocolates[i] == 'silver')
            res[1] += 1
        else if(chocolates[i] == 'blue')
            res[2] += 1
        else if(chocolates[i] == 'crimson')
            res[3] += 1
        else if(chocolates[i] == 'purple')
            res[4] += 1
        else if(chocolates[i] == 'red')
            res[5] += 1
        else if(chocolates[i] == 'pink')
            res[6] += 1
    }
    var a = res.filter(function(val) {
        return val !== 0;
    });
    return a
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let cus = chocolates.reduce(function (b, a) {
        if (a in b) {
            b[a] += 1;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let Array = chocolates.sort((a, b) => {
        if (cus[b] > cus[a]) {
            return 1;
        }
        if (cus[b] < cus[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = Array;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates,number, color, finalColor) {
    if (number < 0)
        return "Number cannot be zero/negative"
    if (color == finalColor)
        return "Can't replace the same chocolates"
    for (var i = 0; i < chocolates.length; i++) {
        if (number > 0 && chocolates[i] == color)
        chocolates[i] = finalColor
    }
    return chocolates
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color, finalColor) {
    if (chocolates.length <= 0)
        return [0, []];
    if (color == finalColor)
        return "Can't replace the same chocolates";
    var count = 0

    for(var i = 0; i < chocolates.length; i++) {
        if(chocolates[i] == finalColor)
            count += 1;
    }
    for (var i = 0; i < chocolates.length; i++) {
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            count += 1
        }
    }
    return [count, chocolates];
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
