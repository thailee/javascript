/**
 * Created by thaidl on 12-02-2017.
 */
function arrayToList (array) {
    var list = null;
    for(var i = array.length - 1; i >= 0; i--)
        list = {value : array[i], rest: list}
    return list;
}

function listToArray(list) {
    var arr = [];
    for(var node = list; node; node = node.rest)
        arr.push(node.value);
    return arr;
}

function prepend(value, list) {
    var list = {value : value, rest : list};
    return list;
}

function nth(list, n) {
    if(!list) return undefined;
    else if(n==0) return list.value;
    else return nth(list.rest, n-1)
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));