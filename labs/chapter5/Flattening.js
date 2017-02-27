/**
 * Created by thaidl on 14-02-2017.
 */

var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
    var rs = [];
    arr.forEach(function (a) {
        for (var i =0; i< a.length; i++)
            rs.push(a[i])
    });
    return rs;
}

console.log(flatten(arrays));

