/**
 * Created by thaidl on 10-02-2017.
 */
var chess = "";
var size = 8;
for(var i = 1; i <= 8; i++){
    for(var j = 1; j <=8; j++) {
       if ((i + j)% 2 == 0) {
           chess += " ";
       }else {
           chess += "#";
       }
    }
    chess += "\n";
}
console.log(chess);
