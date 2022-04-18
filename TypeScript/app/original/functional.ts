export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const DEFAULT_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;
const DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 10;
const TRIPLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 5;
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const checkMinQuality = (item: Item): void => {
  if (item.quality < MIN_QUALITY) item.quality = MIN_QUALITY;
};

const checkMaxQuality = (item: Item) => {
  if (item.quality > MAX_QUALITY) item.quality = MAX_QUALITY;
};

const reduceQuality = (item: Item) => {
  item.quality--;
};

const increaseQuality = (item: Item) => {
  ++item.quality;
};

const reduceAndCheckQuality = (item: Item) => {
  reduceQuality(item);
  checkMinQuality(item);
};

const increaseAndCheckQuality = (item: Item) => {
  increaseQuality(item);
  checkMaxQuality(item);
};

const decreaseSellIn = (item: Item) => {
  item.sellIn--;
};

const updateAgedBrie = (item: Item) => {
  decreaseSellIn(item);
  increaseAndCheckQuality(item);

  if (item.sellIn < DEFAULT_QUALITY_DECREMENT_SELL_IN_THRESHOLD)
    increaseAndCheckQuality(item);
};

const updateSulfuras = () => {
  // do nothing
};

const updateConjured = (item: Item) => {
  decreaseSellIn(item);
  reduceAndCheckQuality(item);
  reduceAndCheckQuality(item);
  if (item.sellIn < DEFAULT_QUALITY_DECREMENT_SELL_IN_THRESHOLD) {
    reduceAndCheckQuality(item);
    reduceAndCheckQuality(item);
  }
};

const updateOtherItems = (item: Item) => {
  decreaseSellIn(item);
  reduceAndCheckQuality(item);
};

const updateBackstagePass = (item: Item) => {
  decreaseSellIn(item);
  increaseAndCheckQuality(item);
  if (item.sellIn < DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)
    increaseAndCheckQuality(item);

  if (item.sellIn < TRIPLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)
    increaseAndCheckQuality(item);
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name === "Aged Brie") return updateAgedBrie(item);

      if (item.name === "Backstage passes to a TAFKAL80ETC concert")
        return updateBackstagePass(item);

      if (item.name === "Sulfuras, Hand of Ragnaros") return updateSulfuras();

      if (item.name.includes("Conjured")) return updateConjured(item);

      updateOtherItems(item);
    });

    return this.items;
  }
}
