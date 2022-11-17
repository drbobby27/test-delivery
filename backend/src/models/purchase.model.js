import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";



const { INTEGER, ARRAY } = DataTypes

export const Purchase = db.define('purchase',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total: {
            type: INTEGER,
            allowNull: true
        },
        detail_id:{
            type: ARRAY,
            allowNull: true
        },
        order_id: {
            type: INTEGER,
            allowNull: true
        }
    })


        


        


