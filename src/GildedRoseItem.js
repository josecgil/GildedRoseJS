function GildedRoseItem(item) {
    Item.call(this, item.name, item.sell_in, item.quality);
}

GildedRoseItem.prototype = Object.create(Item.prototype);
GildedRoseItem.prototype.constructor = GildedRoseItem;


GildedRoseItem.prototype.spendADay=function() {

    if (this.isSulfuras()) {

    } else {
        this.decrementSellIn();
    }

    if (this.isAgedBrie()) {
        this.incrementQuality();
    } else if (this.isBackStage()) {
        this.incrementQuality();
    } else if (this.isSulfuras()) {
        this.incrementQuality();
    } else if (this.isConjured()) {
        this.decrementQuality(2);
    } else {
        this.decrementQuality();
    }

    if (this.isBackStage()) {
        if (this.sell_in < 10) {
            this.incrementQuality();
        }
        if (this.sell_in < 5) {
            this.incrementQuality();
        }
    }

    if (this.isExpired()) {
        if (this.isAgedBrie()) {
            this.incrementQuality();
        } else if (this.isBackStage()) {
            this.loseAllQuality();
        } else if (this.isConjured()) {
            this.decrementQuality(2);
        } else {
            this.decrementQuality();
        }
    }
};

GildedRoseItem.prototype.incrementQuality=function() {
    if (this.quality >= 50) return;
    this.quality++;
};

GildedRoseItem.prototype.decrementQuality=function(delta) {
    delta=delta || 1;
    if (this.quality <= 0) return;
    this.quality=this.quality-delta;
};

GildedRoseItem.prototype.isAgedBrie=function() {
    return this.name == 'Aged Brie';
};

GildedRoseItem.prototype.isBackStage=function() {
    return this.name == 'Backstage passes to a TAFKAL80ETC concert';
};

GildedRoseItem.prototype.isSulfuras=function() {
    return this.name == 'Sulfuras, Hand of Ragnaros';
};

GildedRoseItem.prototype.isConjured=function() {
    return this.name == 'Conjured';
};

GildedRoseItem.prototype.loseAllQuality=function() {
    this.quality = 0;
};

GildedRoseItem.prototype.isExpired=function() {
    return this.sell_in < 0;
};

GildedRoseItem.prototype.decrementSellIn=function() {
    this.sell_in--;
};

GildedRoseItem.prototype.toItem=function() {
    return { name:this.name, quality:this.quality, sell_in:this.sell_in };
};

