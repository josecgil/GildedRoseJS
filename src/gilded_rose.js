function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

function update_quality() {
    for (var i = 0; i < items.length; i++) {
        var gildedRoseItem = new GildedRoseItem(items[i]);
        gildedRoseItem.spendADay();
        items[i]=gildedRoseItem.toItem();
    }
}

