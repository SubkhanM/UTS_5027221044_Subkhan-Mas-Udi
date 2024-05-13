import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { InventoryServiceClient as _inventoryPackage_InventoryServiceClient, InventoryServiceDefinition as _inventoryPackage_InventoryServiceDefinition } from './inventoryPackage/InventoryService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  inventoryPackage: {
    Empty: MessageTypeDefinition
    InventoryService: SubtypeConstructor<typeof grpc.Client, _inventoryPackage_InventoryServiceClient> & { service: _inventoryPackage_InventoryServiceDefinition }
    Item: MessageTypeDefinition
    ItemID: MessageTypeDefinition
    ItemWithID: MessageTypeDefinition
    Items: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

