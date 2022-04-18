import { Item } from "./Item";
import { UpdateableItem } from "./UpdateableItem";

export class AgedBrie extends UpdateableItem {
  constructor(item: Item) {
    super(item);
  }

  private readonly DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD: number = 0;

  update(): void {
    this.decreaseSellIn();
    this.increaseQuality();

    if (this.itemSellIn() < this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)
      this.increaseQuality();
  }
}
