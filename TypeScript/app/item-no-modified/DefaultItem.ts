import { Item } from "./Item";
import { UpdateableItem } from "./UpdateableItem";

export class DefaultItem extends UpdateableItem {
  constructor(item: Item) {
    super(item);
  }

  private DEFAULT_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD: number = 0;

  update(): void {
    this.decreaseQuality();
    this.decreaseSellIn();

    if (
      this.itemSellIn() < this.DEFAULT_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD
    )
      this.decreaseQuality();
  }
}
