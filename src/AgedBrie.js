function AgedBrie(item) {
    NormalItem.call(this, item);
}

AgedBrie.prototype = Object.create(NormalItem.prototype);
AgedBrie.prototype.constructor = AgedBrie;

AgedBrie.prototype.spendADay=function() {
    this.incrementQuality();
    this.decrementSellIn();
    if (this.isExpired()) {
        this.incrementQuality();
    }
};
