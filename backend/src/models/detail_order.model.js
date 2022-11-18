import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Product } from "./product.model.js"
import { Order } from "./order.model.js"


const { INTEGER, DOUBLE, STRING } = DataTypes

export const Detail = db.define('details',{
        id: {
            type: INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        order_id: {
             type: STRING,
             allowNull: true
            },
        product_id: {
            type: INTEGER,
            allowNull: true
        },
        amount: {
            type: INTEGER,
            allowNull: true
        },
        total: {
            type: DOUBLE,
            allowNull: true
        }
    })

   
    Detail.belongsTo(Product, {foreignKey: 'product_id', sourceKey: 'id'});
    Product.hasMany(Detail, {foreignKey: 'product_id', targetId: 'id'});

    Detail.belongsTo(Order, {foreignKey: 'order_id', sourceKey: 'id'});
    Order.hasMany(Detail, {foreignKey: 'order_id', targetId: 'id'});