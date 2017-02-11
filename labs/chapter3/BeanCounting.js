/**
 * Created by thaidl on 11-02-2017.
 */
function countBs(text) {
    var len = text.length;
    var count = 0;
    for(var i = 0; i<= len; i++){
        if(text.charAt(i) === "B")
            count += 1;
    }
    return count;
}

console.log(countBs("BBCBDSASDCBBCSACBB"));

function countChar(text, character) {
    var count = 0;
    var len = text.length;
    for(var i =0 ; i<=len; i++){
        if(text.charAt(i) === character)
            count += 1;
    }
    return count;
}

console.log(countChar("kakkakakaerklackerk", "k"));