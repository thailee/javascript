/**
 * Created by thaidl on 12-02-2017.
 */

function deepEqual(a,b) {
    if(a === b) return true;
    if (a == null || typeof a != "object" || b == null || typeof b != "object")
        return false;
    var proA = 0, proB = 0;

    for(var pro in a)
        proA += 1;
    for(var pro in b){
        proB += 1;
        if(!(pro in a) || !deepEqual(a[pro], b[pro]))
        return false;
    }
    return proA == proB;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));