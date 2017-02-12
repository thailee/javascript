/**
 * Created by thaidl on 12-02-2017.
 */
function reverseArray(arr) {
    var rs = [];
    for(var i = arr.length - 1; i >= 0; i--)
        rs.push(arr[i]);
    return rs;
}

function reverseArrayInPlace(array) {
    var rs = [];
    for(var i = 0; i <= Math.floor(array.length/2) ; i++){
        var temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i -1] = temp;
    }
    return rs;
}
console.log(reverseArray(["A", "B", "c"]));
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);