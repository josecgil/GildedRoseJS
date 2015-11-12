describe("Gilded Rose Specs", function() {

    it("must not change quality if item is sulfuras", function() {
        items=new ItemsBuilder()
            .addSulfuras()
            .withQuality(80)
            .build();
        update_quality();
        expect(items[0].quality).toBe(80);
    });

    it("must lowers sellIn by 1 if item is not sulfuras", function() {
        items=new ItemsBuilder()
            .addNormal()
            .withSellIn(1)
            .build();
        update_quality();
        expect(items[0].sell_in).toBe(0);
    });

    it("must not decrease sellIn if item is sulfuras", function() {
        items=new ItemsBuilder()
            .addSulfuras()
            .withSellIn(1)
            .build();
        update_quality();
        expect(items[0].sell_in).toBe(1);
    });


    it("must increase quality by 2 if item is Aged Brie", function() {
        items=new ItemsBuilder()
            .addAgedBrie()
            .expired()
            .withQuality(2)
            .build();
        update_quality();
        expect(items[0].quality).toBe(4);
    });

    it("must increase quality by 1 when Backstage Pass is near to expire (11 days)", function() {
        items=new ItemsBuilder()
            .addBackstagePass()
            .withSellIn(11)
            .withQuality(2)
            .build();
        update_quality();
        expect(items[0].quality).toBe(3);
    });

    it("must increase quality by 2 when Backstage Pass is near to expire (6 days)", function() {
        items=new ItemsBuilder()
            .addBackstagePass()
            .withSellIn(6)
            .withQuality(2)
            .build();
        update_quality();
        expect(items[0].quality).toBe(4);
    });


    it("must increase quality by 2 when Backstage Pass if about to expire (<11 days)", function() {
        items=new ItemsBuilder()
            .addBackstagePass()
            .withSellIn(10)
            .withQuality(2)
            .build();
        update_quality();
        expect(items[0].quality).toBe(4);
    });


    it("must increase quality by 3 when Backstage Pass if about to expire (<6 days)", function() {
        items=new ItemsBuilder()
            .addBackstagePass()
            .withSellIn(5)
            .withQuality(2)
            .build();
        update_quality();
        expect(items[0].quality).toBe(5);
    });

    it("must set quality to 0 when Backstage Pass is expired", function() {
        items=new ItemsBuilder()
            .addBackstagePass()
            .expired()
            .withQuality(2)
            .build();
        update_quality();
        expect(items[0].quality).toBe(0);
    });




    it("must increase only by 1 if backstage has quality 49", function() {
        items=new ItemsBuilder()
            .addBackstagePass()
            .withSellIn(5)
            .withQuality(49)
            .build();
        update_quality();
        expect(items[0].quality).toBe(50);
    });

    it("must decrease the quality by 1 if item is normal", function() {
        items=new ItemsBuilder()
            .addNormal()
            .withQuality(1)
            .build();
        update_quality();
        expect(items[0].quality).toBe(0);
    });

    it("must decrease the quality by 2 if is item is normal and expired", function() {
        items=new ItemsBuilder()
            .addNormal()
            .withQuality(4)
            .expired()
            .build();
        update_quality();
        expect(items[0].quality).toBe(2);
    });

    it("must decrease the quality by 2 if item is conjured", function() {
        items=new ItemsBuilder()
            .addConjured()
            .withQuality(2)
            .build();
        update_quality();
        expect(items[0].quality).toBe(0);
    });

    it("must decrease the quality by 4 if is item is conjured and expired", function() {
        items=new ItemsBuilder()
            .addConjured()
            .withQuality(6)
            .expired()
            .build();
        update_quality();
        expect(items[0].quality).toBe(2);
    });

});
