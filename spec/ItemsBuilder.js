(function() {
    var DEFAULT_SELLIN=1;
    var DEFAULT_QUALITY=1;
    var EXPIRED_SELLIN=0;

    function ItemsBuilder() {
        this.items=[];
    }

    ItemsBuilder.prototype._lastItem=function() {
        return this.items[this.items.length-1];
    };

    ItemsBuilder.prototype._addItem=function(name) {
        this.items.push(new Item(name, DEFAULT_SELLIN, DEFAULT_QUALITY));
    };

    ItemsBuilder.prototype.addNormal=function() {
        this._addItem("Normal item");
        return this;
    };

    ItemsBuilder.prototype.addAgedBrie=function() {
        this._addItem("Aged Brie");
        return this;
    };

    ItemsBuilder.prototype.addBackstagePass=function() {
        this._addItem("Backstage passes to a TAFKAL80ETC concert");
        return this;
    };

    ItemsBuilder.prototype.addSulfuras=function() {
        this._addItem("Sulfuras, Hand of Ragnaros");
        return this;
    };

    ItemsBuilder.prototype.withQuality=function(newQuality) {
        var lastItem=this._lastItem();
        lastItem.quality=newQuality;
        return this;
    };

    ItemsBuilder.prototype.withSellIn=function(newSellIn) {
        var lastItem=this._lastItem();
        lastItem.sell_in=newSellIn;
        return this;
    };

    ItemsBuilder.prototype.expired=function() {
        var lastItem=this._lastItem();
        lastItem.sell_in=EXPIRED_SELLIN;
        return this;
    };

    ItemsBuilder.prototype.build=function() {
        var clonedItems=this.items.slice(0);
        this.items=[];
        return clonedItems;
    };

    this.ItemsBuilder=ItemsBuilder;
})(this);

