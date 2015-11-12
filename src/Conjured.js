function Conjured(item) {
    NormalItem.call(this, item);
};

Conjured.prototype = Object.create(NormalItem.prototype);
Conjured.prototype.constructor = Conjured;

Conjured.prototype.spendADay=function() {
    this.decrementQuality(2);
    this.decrementSellIn();

    if (this.isExpired()) {
        this.decrementQuality(2);
    }
};
