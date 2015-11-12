function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

function update_quality() {
    for (var i = 0; i < items.length; i++) {
        spendADay(items[i]);
    }
}

function spendADay(item) {

    if (isSulfuras(item)) {

    } else {
        decrementSellIn(item);
    }

    if (isAgedBrie(item)) {
        incrementQuality(item);
    } else if (isBackStage(item)) {
        incrementQuality(item);
    } else if (isSulfuras(item)) {
        incrementQuality(item);
    } else if (isConjured(item)) {
        decrementQuality(item, 2);
    } else {
        decrementQuality(item);
    }

    if (isBackStage(item)) {
        if (item.sell_in < 10) {
            incrementQuality(item);
        }
        if (item.sell_in < 5) {
            incrementQuality(item);
        }
    }

    if (isExpired(item)) {
        if (isAgedBrie(item)) {
            incrementQuality(item);
        } else if (isBackStage(item)) {
            loseAllQuality(item);
        } else if (isConjured(item)) {
            decrementQuality(item, 2);
        } else {
            decrementQuality(item);
        }
    }
}

function incrementQuality(item) {
    if (item.quality >= 50) return;
    item.quality++;
}

function decrementQuality(item, delta) {
    delta=delta || 1;
    if (item.quality <= 0) return;
    item.quality=item.quality-delta;
}

function isAgedBrie(item) {
    return item.name == 'Aged Brie';
}

function isBackStage(item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
}

function isSulfuras(item) {
    return item.name == 'Sulfuras, Hand of Ragnaros';
}

function isConjured(item) {
    return item.name == 'Conjured';
}

function loseAllQuality(item) {
    item.quality = 0;
}

function isExpired(item) {
    return item.sell_in < 0;
}

function decrementSellIn(item) {
    item.sell_in--;
}


