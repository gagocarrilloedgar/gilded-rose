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

    def __increase_quality__(self):
        if(self.item.quality < self.MAX_QUALITY):
            self.item = self.MAX_QUALITY
        self.item.quality += 1

    def decrease_quality(self):
        if(self.item.quality < self.MIN_QUALITY):
            self.item.quality = self.MIN_QUALITY
        self.item.quality -= 1

    def decrease_sell_in(self):
        self.item.sell_in -= 1

    def update_aged_brie(self):
        self.decrease_sell_in()
        self.increase_quality()

        if(self.item.sell_in < self.DEFAULT_DOUBLE_QUALITY_THRESHOLD):
            self.increase_quality()

    def update_backstage_passes(self):
        self.decrease_sell_in()
        self.increase_quality()

        if(self.item.sell_in < self.BACKSTAGE_DOUBLE_QUALITY_THRESHOLD):
            self.increase_quality()

        if(self.item.sell_in < self.BACKSTAGE_TRIPLE_QUALITY_THRESHOLD):
            self.increase_quality()

    def update_sulfuras(self):
        # do nothing
        pass

    def standar_udpate(self):
        self.decrease_sell_in()
        self.decrease_quality()

        if(self.item.sell_in < 0):
            self.decrease_quality()

    def update_item(self):
        for item in self.items:
            if(item == self.AGED_BRIE):
                return self.update_aged_brie()
            if(item == self.BACKSTAGE_PASSES):
                return self.update_backstage_passes()
            if(item == self.SULFURAS):
                return self.update_sulfuras()
            else:
                return self.standar_udpate()


class Item:
    def __init__(self, name, sell_in, quality):
        self.name = name
        self.sell_in = sell_in
        self.quality = quality

    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.sell_in, self.quality)
