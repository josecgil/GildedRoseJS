function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = []

function update_quality() {
    var itemFactory=new ItemFactory();
    for (var i = 0; i < items.length; i++) {
        var item = itemFactory.create(items[i]);
        item.spendADay();
        items[i]=item.toItem();
    }
}

