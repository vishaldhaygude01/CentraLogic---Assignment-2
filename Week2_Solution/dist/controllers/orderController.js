"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processOrders = void 0;
const db_1 = __importDefault(require("../utils/db"));
const processOrders = async (req, res) => {
    try {
        const orders = req.body.items;

        const filteredOrders = orders.filter((order) => !order.orderBlocks.some((block) => block.lineNo % 3 === 0));
    
        for (const order of filteredOrders) {
            await db_1.default.query("INSERT INTO orders (orderID) VALUES ($1)", [
                order.orderID,
            ]);
        }
        res.status(200).send("Orders processed and stored successfully.");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing orders.");
    }
};
exports.processOrders = processOrders;
