function Backstage(item) {
    NormalItem.call(this, item);
}

Backstage.prototype = Object.create(NormalItem.prototype);
Backstage.prototype.constructor = Backstage;

Backstage.prototype.spendADay=function() {
    this.incrementQuality();

    if (this.sell_in < 11) {
        this.incrementQuality();
    }
    if (this.sell_in < 6) {
        this.incrementQuality();
    }

    this.decrementSellIn();

    if (this.isExpired()) {
        this.loseAllQuality();
    }
};
