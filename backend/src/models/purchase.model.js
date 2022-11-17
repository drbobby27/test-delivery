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
        details:{
            type: ARRAY,
            allowNull: true
        }
    })


        


        



    {
        id: 982365,
        total: 9826,
        details_id: 3463
    }

    id:29692,
    details: [
        {
            id:1235,
            cantidad: 2,
            subtotal: 50000
        }
    ]