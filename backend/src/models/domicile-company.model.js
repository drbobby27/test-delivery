import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";

const { STRING, INTEGER } = DataTypes

export const DomicileC = db.define('domicileCompany',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: STRING,
            allowNull: true
        },
        address:{ 
            type: STRING,
            allowNull: true
        }
        })


        export default DomicileC


        