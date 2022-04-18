import { AgedBrie, GildedRose, Item } from "@/item-no-modified";

describe("Gilded Rose", () => {
  it("should Aged brie", () => {
    const gildedRose = new GildedRose([
      new AgedBrie(new Item("Aged Brie", 2, 0))
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
  });
});

describe("AgedBrie", () => {
  const brieItem = new Item("Aged Brie", 2, 0);
  const brie = new AgedBrie(brieItem);

  it("should decreses sellIn by 1 and increase quality by 1", () => {
    brie.update();
    expect(brieItem.sellIn).toBe(1);
    expect(brieItem.quality).toBe(1);
  });

  it("should decrease sellIn to 0 and increase quality to 2", () => {
    brie.update();
    expect(brieItem.sellIn).toBe(0);
    expect(brieItem.quality).toBe(2);
  });

  it("should decreses sellIn by 1 increase quality to 4", () => {
    brie.update();
    expect(brieItem.sellIn).toBe(-1);
    expect(brieItem.quality).toBe(4);
  });
});
