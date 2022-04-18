import { Item } from "./Item";
import { UpdateableItem } from "./UpdateableItem";

export class Sulfuras extends UpdateableItem {
  constructor(item: Item) {
    super(item);
  }

  update(): void {
    // do nothing
  }
}
