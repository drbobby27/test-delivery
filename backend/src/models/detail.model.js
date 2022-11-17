import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Order } from "./order.model.js";


const { INTEGER } = DataTypes

export const Detail = db.define('detail',{
       
    id: {
        type: INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    amount: {
         type: INTEGER,
        allowNull: true
        },
    subtotal: {
        type: INTEGER,
        allowNull: true
    },
    purchase_id:{
        type: INTEGER,
        allowNull: true
    },
    product_id:{
        type: INTEGER,
        allowNull: true
    }
    })

   
    Detail.belongsTo(Order, {foreignKey: 'order_id', sourceKey: 'id'});
    Order.hasMany(Detail, {foreignKey: 'order_id', targetId: 'id'});