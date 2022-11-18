import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, DOUBLE } = DataTypes

export const Order = db.define('orders',{ 
        id: {
            type: STRING,
            primaryKey: true
        },
        date_order:{
            type: STRING,
            allowNull: true
        },
        client_name:{
            type: STRING,
            allowNull: true
        },
        phone_number: {
            type: STRING,
            allowNull: true
        },
        status:{ 
            type: STRING,
            allowNull: true,
            defaultValue: "En proceso"
        },
        address: {
            type: STRING,
            allowNull: true
        },
        total: {
            type: DOUBLE,
            allowNull: true
        },
        description: {
            type: STRING,
            allowNull: true
        }
        })

        



        
