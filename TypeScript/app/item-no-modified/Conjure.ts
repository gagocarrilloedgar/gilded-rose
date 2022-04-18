import { Item } from "./Item";
import { UpdateableItem } from "./UpdateableItem";

export class Conjure extends UpdateableItem {
  constructor(item: Item) {
    super(item);
  }

  private readonly DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD: number = 0;

  update(): void {
    this.decreaseSellIn();
    this.decreaseQuality();
    this.decreaseQuality();

    if (this.itemSellIn() < this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD) {
      this.decreaseQuality();
      this.decreaseQuality();
    }
  }
}
