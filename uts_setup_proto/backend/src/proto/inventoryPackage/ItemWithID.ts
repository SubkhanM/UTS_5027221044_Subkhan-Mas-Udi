// Original file: ../proto/user.proto

import type { ItemID as _inventoryPackage_ItemID, ItemID__Output as _inventoryPackage_ItemID__Output } from '../inventoryPackage/ItemID';
import type { Item as _inventoryPackage_Item, Item__Output as _inventoryPackage_Item__Output } from '../inventoryPackage/Item';

export interface ItemWithID {
  'itemId'?: (_inventoryPackage_ItemID | null);
  'item'?: (_inventoryPackage_Item | null);
}

export interface ItemWithID__Output {
  'itemId'?: (_inventoryPackage_ItemID__Output);
  'item'?: (_inventoryPackage_Item__Output);
}
