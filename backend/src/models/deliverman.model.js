import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { DomicileC } from "./domicile-company.model.js"
const { STRING, INTEGER } = DataTypes

 export const Deliverman = db.define('deliverman',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name:{
            type: STRING,
            allowNull: true
        },
        phone_number: {
            type: STRING,
            allowNull: true
        },
        company_id:{ 
            type: INTEGER,
            allowNull: true
        }
        })

        Deliverman.belongsTo(DomicileC, {foreignKey: 'company_id', sourceKey: 'id'});
        DomicileC.hasMany(Deliverman, {foreignKey: 'company_id', targetId: 'id'});

