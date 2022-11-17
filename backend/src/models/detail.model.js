import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";



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
    }
    })

   
  