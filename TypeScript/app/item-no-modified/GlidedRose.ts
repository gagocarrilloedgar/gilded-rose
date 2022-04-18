import { UpdateableItem } from "./UpdateableItem";

export class GildedRose {
  items: Array<UpdateableItem>;

  constructor(items = [] as Array<UpdateableItem>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((element: UpdateableItem) => element.update());
    return this.items;
  }
}
