import { Item } from "./Item";
import { UpdateableItem } from "./UpdateableItem";

export class BackstagePasses extends UpdateableItem {
  private DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 10;
  private TRIPLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 5;

  constructor(item: Item) {
    super(item);
  }

  update(): void {
    this.decreaseSellIn();
    this.increaseQuality();

    if (this.itemSellIn() < this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)
      this.increaseQuality();

    if (this.itemSellIn() < this.TRIPLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)
      this.increaseQuality();
  }
}
