/**
 * Created by thaidl on 15-02-2017.
 */
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (vector_other) {
    return new Vector(this.x + vector_other.x, this.y + vector_other.y );
};

Vector.prototype.minus = function (vecter_other) {
    return new Vector(this.x - vecter_other.x, this.y - vecter_other.y);
};

Object.defineProperty(Vector.prototype, "length",{
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);