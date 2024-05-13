// Original file: ../proto/user.proto

import type { Item as _inventoryPackage_Item, Item__Output as _inventoryPackage_Item__Output } from '../inventoryPackage/Item';

export interface Response {
  'message'?: (string);
  'code'?: (number);
  'itemId'?: (string);
  'item'?: (_inventoryPackage_Item | null);
}

export interface Response__Output {
  'message'?: (string);
  'code'?: (number);
  'itemId'?: (string);
  'item'?: (_inventoryPackage_Item__Output);
}
