// Original file: ../proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _inventoryPackage_Empty, Empty__Output as _inventoryPackage_Empty__Output } from '../inventoryPackage/Empty';
import type { Item as _inventoryPackage_Item, Item__Output as _inventoryPackage_Item__Output } from '../inventoryPackage/Item';
import type { ItemID as _inventoryPackage_ItemID, ItemID__Output as _inventoryPackage_ItemID__Output } from '../inventoryPackage/ItemID';
import type { ItemWithID as _inventoryPackage_ItemWithID, ItemWithID__Output as _inventoryPackage_ItemWithID__Output } from '../inventoryPackage/ItemWithID';
import type { Items as _inventoryPackage_Items, Items__Output as _inventoryPackage_Items__Output } from '../inventoryPackage/Items';
import type { Response as _inventoryPackage_Response, Response__Output as _inventoryPackage_Response__Output } from '../inventoryPackage/Response';

export interface InventoryServiceClient extends grpc.Client {
  AddItem(argument: _inventoryPackage_Item, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  AddItem(argument: _inventoryPackage_Item, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  AddItem(argument: _inventoryPackage_Item, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  AddItem(argument: _inventoryPackage_Item, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  addItem(argument: _inventoryPackage_Item, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  addItem(argument: _inventoryPackage_Item, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  addItem(argument: _inventoryPackage_Item, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  addItem(argument: _inventoryPackage_Item, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  
  DeleteItem(argument: _inventoryPackage_ItemID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _inventoryPackage_ItemID, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _inventoryPackage_ItemID, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteItem(argument: _inventoryPackage_ItemID, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _inventoryPackage_ItemID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _inventoryPackage_ItemID, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _inventoryPackage_ItemID, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  deleteItem(argument: _inventoryPackage_ItemID, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  
  GetAllItems(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  GetAllItems(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  GetAllItems(argument: _inventoryPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  GetAllItems(argument: _inventoryPackage_Empty, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _inventoryPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _inventoryPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  getAllItems(argument: _inventoryPackage_Empty, callback: grpc.requestCallback<_inventoryPackage_Items__Output>): grpc.ClientUnaryCall;
  
  UpdateItem(argument: _inventoryPackage_ItemWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _inventoryPackage_ItemWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _inventoryPackage_ItemWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateItem(argument: _inventoryPackage_ItemWithID, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _inventoryPackage_ItemWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _inventoryPackage_ItemWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _inventoryPackage_ItemWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  updateItem(argument: _inventoryPackage_ItemWithID, callback: grpc.requestCallback<_inventoryPackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface InventoryServiceHandlers extends grpc.UntypedServiceImplementation {
  AddItem: grpc.handleUnaryCall<_inventoryPackage_Item__Output, _inventoryPackage_Response>;
  
  DeleteItem: grpc.handleUnaryCall<_inventoryPackage_ItemID__Output, _inventoryPackage_Response>;
  
  GetAllItems: grpc.handleUnaryCall<_inventoryPackage_Empty__Output, _inventoryPackage_Items>;
  
  UpdateItem: grpc.handleUnaryCall<_inventoryPackage_ItemWithID__Output, _inventoryPackage_Response>;
  
}

export interface InventoryServiceDefinition extends grpc.ServiceDefinition {
  AddItem: MethodDefinition<_inventoryPackage_Item, _inventoryPackage_Response, _inventoryPackage_Item__Output, _inventoryPackage_Response__Output>
  DeleteItem: MethodDefinition<_inventoryPackage_ItemID, _inventoryPackage_Response, _inventoryPackage_ItemID__Output, _inventoryPackage_Response__Output>
  GetAllItems: MethodDefinition<_inventoryPackage_Empty, _inventoryPackage_Items, _inventoryPackage_Empty__Output, _inventoryPackage_Items__Output>
  UpdateItem: MethodDefinition<_inventoryPackage_ItemWithID, _inventoryPackage_Response, _inventoryPackage_ItemWithID__Output, _inventoryPackage_Response__Output>
}
