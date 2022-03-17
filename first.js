var first = /** @class */ (function () {
    function first() {
    }
    Object.defineProperty(first.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theage) {
            if (theage <= 0) {
                throw new Error('not valid');
            }
            this._age = theage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(first.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (thename) {
            this._name = thename;
        },
        enumerable: false,
        configurable: true
    });
    return first;
}());
var person = new first();
person.age = 30;
person.name = 'Umesh';
console.log("Age ".concat(person.age, " is of ").concat(person.name));
