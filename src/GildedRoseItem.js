function GildedRoseItem(item) {
    Item.call(this, item.name, item.sell_in, item.quality);
}

GildedRoseItem.prototype = Object.create(Item.prototype);
GildedRoseItem.prototype.constructor = GildedRoseItem;


GildedRoseItem.prototype.spendADay=function() {

    this.decrementSellIn();

    if (this.isConjured()) {
        this.decrementQuality(2);
    }

    if (this.isExpired()) {
        if (this.isConjured()) {
            this.decrementQuality(2);
        }
    }
};

GildedRoseItem.prototype.decrementQuality=function(delta) {
    delta=delta || 1;
    if (this.quality <= 0) return;
    this.quality=this.quality-delta;
};

GildedRoseItem.prototype.decrementSellIn=function() {
    this.sell_in--;
};

GildedRoseItem.prototype.toItem=function() {
    return { name:this.name, quality:this.quality, sell_in:this.sell_in };
};

GildedRoseItem.prototype.isConjured=function() {
    return this.name == 'Conjured';
};

GildedRoseItem.prototype.isExpired=function() {
    return this.sell_in < 0;
};



