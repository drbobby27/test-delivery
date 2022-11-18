import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const ProductCategory = db.define('category',{
       
    id: {
        type: INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    type: {
         type: STRING,
        allowNull: false
        }
    })

            