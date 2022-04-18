import { Item } from "./Item";

export abstract class UpdateableItem extends Item {
  MAX_QUALITY = 50;
  MIN_QUALITY = 0;

  private item: Item;

  constructor(item: Item) {
    super(item.name, item.sellIn, item.quality);
    this.item = item;
  }

  abstract update(): void;

  itemSellIn = (): number => this.item.sellIn;

  checkMinQuality(): void {
    if (this.item.quality < this.MIN_QUALITY) this.resetQuality();
  }

  checkMaxQuality(): void {
    if (this.item.quality > this.MAX_QUALITY)
      this.item.quality = this.MAX_QUALITY;
  }

  decreaseSellIn(): void {
    this.item.sellIn--;
  }

  increaseQuality(): void {
    ++this.item.quality;
    this.checkMaxQuality();
  }

  decreaseQuality(): void {
    this.item.quality--;
    this.checkMinQuality();
  }

  resetQuality(): void {
    this.item.quality = 0;
  }
}
