# -*- coding: utf-8 -*-

class GildedRose(object):

    AGED_BRIE = "Aged Brie"
    BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert"
    SULFURAS = "Sulfuras, Hand of Ragnaros"
    DEFAULT_DOUBLE_QUALITY_THRESHOLD = 0
    BACKSTAGE_DOUBLE_QUALITY_THRESHOLD = 10
    BACKSTAGE_TRIPLE_QUALITY_THRESHOLD = 5
    MAX_QUALITY = 50
    MIN_QUALITY = 0

    def __init__(self, items):
        self.items = items

    def increase_quality(self, item):
        if(item.quality >= self.MAX_QUALITY):
            item.quality = self.MAX_QUALITY
        else:
            item.quality += 1

    def decrease_quality(self, item):
        if(item.quality < self.MIN_QUALITY):
            item.quality = self.MIN_QUALITY
        else:
            item.quality -= 1

    def decrease_sell_in(self, item):
        item.sell_in -= 1

    def update_aged_brie(self, item):
        self.decrease_sell_in(item)
        self.increase_quality(item)

        if(item.sell_in < self.DEFAULT_DOUBLE_QUALITY_THRESHOLD):
            self.increase_quality(item)

    def update_backstage_passes(self, item):
        self.decrease_sell_in(item)
        self.increase_quality(item)

        if(item.sell_in < self.BACKSTAGE_DOUBLE_QUALITY_THRESHOLD):
            self.increase_quality(item)

        if(item.sell_in < self.BACKSTAGE_TRIPLE_QUALITY_THRESHOLD):
            self.increase_quality(item)

    def update_sulfuras(self):
        # do nothing
        pass

    def standar_udpate(self, item):
        self.decrease_sell_in(item)
        self.decrease_quality(item)

        if(item.sell_in < 0):
            self.decrease_quality(item)

    def update_quality(self):
        for item in self.items:
            if(item.name == self.AGED_BRIE):
                self.update_aged_brie(item)
            elif(item.name == self.BACKSTAGE_PASSES):
                self.update_backstage_passes(item)
            elif(item.name == self.SULFURAS):
                self.update_sulfuras()
            else:
                self.standar_udpate(item)


class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
