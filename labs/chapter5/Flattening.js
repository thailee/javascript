/**
 * Created by thaidl on 14-02-2017.
 */

var arrays = [[1, 2, 3], [4, 5], [6]];
function flattening(array) {
    var arr = [];
    array.forEach(function (a) {
        for(var i = 0; i < a.length; i++ )
        arr.push(a[i])
    });
    return arr;
}
console.log(flattening(arrays));

// → [1, 2, 3, 4, 5, 6]
