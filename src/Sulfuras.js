function Sulfuras(item) {
    NormalItem.call(this, item);
};

Sulfuras.prototype = Object.create(NormalItem.prototype);
Sulfuras.prototype.constructor = Sulfuras;

Sulfuras.prototype.spendADay=function() {

};
