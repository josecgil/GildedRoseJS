function ItemFactory() {

};

ItemFactory.prototype.isAgedBrie=function(item) {
    return item.name == 'Aged Brie';
};

ItemFactory.prototype.isBackStage=function(item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
};

ItemFactory.prototype.isSulfuras=function(item) {
    return item.name == 'Sulfuras, Hand of Ragnaros';
};

ItemFactory.prototype.isConjured=function(item) {
    return item.name == 'Conjured';
};

ItemFactory.prototype.create=function(item) {
    if (this.isAgedBrie(item)) {
        return new AgedBrie(item);
    }
    if (this.isSulfuras(item)) {
        return new GildedRoseItem(item);
    }
    if (this.isBackStage(item)) {
        return new Backstage(item);
    }
    if (this.isConjured(item)) {
        return new GildedRoseItem(item);
    }
    return new NormalItem(item);
};