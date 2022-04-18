import {
  DefaultItem,
  GildedRose,
  AgedBrie,
  Sulfuras,
  BackstagePasses,
  Item,
  Conjure
} from "../app/item-no-modified";

const items = [
  new DefaultItem(new Item("+5 Dexterity Vest", 10, 20)),
  new AgedBrie(new Item("Aged Brie", 2, 0)),
  new DefaultItem(new Item("Elixir of the Mongoose", 5, 7)),
  new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", 0, 80)),
  new Sulfuras(new Item("Sulfuras, Hand of Ragnaros", -1, 80)),
  new BackstagePasses(
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
  ),
  new BackstagePasses(
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)
  ),
  new BackstagePasses(
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
  ),
  new Conjure(new Item("Conjured Mana Cake", 3, 6))
];

const gildedRose = new GildedRose(items);

let days: number = 3;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach((element) => {
    console.log(
      element.name + " " + element.itemSellIn() + " " + element.quality
    );
  });
  console.log();
  gildedRose.updateQuality();
}
