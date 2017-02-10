/**
 * Created by thaidl on 10-02-2017.
 */
for(var i = 0; i <= 100; i++){
    console.log(i % 3 == 0 || i % 5 == 0 ? ((i % 3) == 0 ? "fizz" : "") + ((i % 5) == 0 ? "buzz" : "")  : i)
	}