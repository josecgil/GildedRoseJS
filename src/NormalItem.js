function NormalItem(item) {
    Item.call(this, item.name, item.sell_in, item.quality);
};

NormalItem.prototype = Object.create(Item.prototype);
NormalItem.prototype.constructor = NormalItem;

NormalItem.prototype.incrementQuality=function() {
    if (this.quality >= 50) return;
    this.quality++;
};

NormalItem.prototype.decrementQuality=function(delta) {
    delta=delta || 1;
    if (this.quality <= 0) return;
    this.quality=this.quality-delta;
};

NormalItem.prototype.decrementSellIn=function() {
    this.sell_in--;
};

NormalItem.prototype.toItem=function() {
    return { name:this.name, quality:this.quality, sell_in:this.sell_in };
};

NormalItem.prototype.isExpired=function() {
    return this.sell_in < 0;
};

NormalItem.prototype.spendADay=function() {
    this.decrementQuality();
    this.decrementSellIn();
    if (this.isExpired.call(this)) {
        this.decrementQuality();
    }
};