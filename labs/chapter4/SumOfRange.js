/**
 * Created by thaidl on 12-02-2017.
 */

function range(start, end, val) {
    if(val == null) val = 1;
    var arr = [];
    if(val > 0){
        for(var i = start; i <= end; i += val)
            arr.push(i);
    }
    else {
        for(var i = start; i >= end; i += val)
            arr.push(i);
    }
    return arr;
}
function sum(array) {
    var s = 0;
    for(var i = 0; i < array.length; i++){
        s += array[i];
    }
    return s;
}
console.log(range(1,10));
console.log(range(5,2,-1));
console.log(range(26,6,-2));
console.log(sum(range(1,10)));