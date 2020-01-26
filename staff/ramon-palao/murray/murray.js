'use strict';

function Murray() {
    var _arguments = arguments;

    var initializeWithLength = (function () {
        if (_arguments.length === 1 && typeof _arguments[0] === 'number')
            if (Number.isInteger(_arguments[0]) && _arguments[0] > 0)
                return true;
            else throw new RangeError('Invalid murray length')

        return false;
    })();

    this.length = initializeWithLength ? arguments[0] : arguments.length;

    if (!initializeWithLength)
        for (var i = 0; i < arguments.length; i++) this[i] = arguments[i];
}

// Murray.prototype.push = function (value) {
//     this[this.length] = value;

//     return ++this.length;
// };

// Murray.prototype.forEach = function (expression) {
//     if (typeof expression !== 'function') throw new TypeError(expression + ' is not a function');

//     for (var i = 0; i < this.length; i++) expression(this[i], i, this);
// };

Murray.prototype.some = function (expression) {
    if(typeof expression !== "function") throw new TypeError(expression + " is not a function");
    for (var i = 0; i < this.length; i++){
        if(expression(this[i])){
            return true;
        }
    }
    return false;
};

Murray.prototype.concat = function(){
    var newMurray = new Murray
    if(typeof this === "undefined") throw new TypeError("Cannot read property 'concat' of " + this);
    if(typeof this === "boolean") throw new TypeError(this + ".concat is not a function");
    for(var i = 0; i < this.length; i++){
        newMurray[i] = this[i];
        ++newMurray.length; 
    }

    for (var i=0; i<arguments.length;  i++){
        if(typeof arguments[i] === "string" || typeof arguments[i] === "boolean" || typeof arguments[i] === "number" || typeof arguments[i] === "function" || typeof arguments[i] === "undefined"){
            newMurray[newMurray.length] = arguments[i]; ++newMurray.length;
        } else {
            for (var j = 0; j < arguments[i].length; j++){
                newMurray[newMurray.length]=arguments[i][j];
                ++newMurray.length;
            }
        }  
    }
    return newMurray;
};

Murray.prototype.pop = function(){
    var result = [];
    result[result.length] = this[this.length -1];

    delete this[this.length - 1];
    --this.length;

    return result[result.length -1];
};

Murray.prototype.includes = function(value, start){
    if(start === undefined) start = 0;
    if(start < 0) start += this.length;
    for (var i = start; i < this.length; i++){
        if (this[i] === value){
            return true;
        }
    }
    return false;
};