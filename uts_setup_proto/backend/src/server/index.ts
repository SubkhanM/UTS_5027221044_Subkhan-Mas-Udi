import grpc from 'grpc';
import { InventoryService } from '../proto/inventoryPackage/InventoryService';
import { AddItemRequest, DeleteItemRequest, Empty, GetAllItemsRequest, UpdateItemRequest } from '../proto/inventoryPackage';
import { addItem, deleteItem, getAllItems, updateItem } from '../proto/user'; // Implement these functions

const server = new grpc.Server();

server.addService(InventoryService, {
  addItem: (call, callback) => {
    const request = call.request as AddItemRequest;
    const item = request.getItem();

    addItem(item.toObject(), (error, response) => {
      if (!error) {
        callback(null, response);
      } else {
        callback(error, null);
      }
    });
  },
  getAllItems: (call, callback) => {
    const request = call.request as GetAllItemsRequest;

    getAllItems({}, (error, response) => {
      if (!error) {
        const items = response.getItemsList();
        callback(null, { itemsList: items });
      } else {
        callback(error, null);
      }
    });
  },
  updateItem: (call, callback) => {
    const request = call.request as UpdateItemRequest;
    const itemId = request.getItemId();
    const item = request.getItem();

    updateItem({ id: itemId, ...item.toObject() }, (error, response) => {
      if (!error) {
        callback(null, response);
      } else {
        callback(error, null);
      }
    });
  },
  deleteItem: (call, callback) => {
    const request = call.request as DeleteItemRequest;
    const itemId = request.getItemId();

    deleteItem({ id: itemId }, (error, response) => {
      if (!error) {
        callback(null, response);
      } else {
        callback(error, null);
      }
    });
  },
});

const PORT = 50051;
const address = `0.0.0.0:${PORT}`;
server.bind(address, grpc.ServerCredentials.createInsecure());
console.log(`Server running at ${address}`);
server.start();
