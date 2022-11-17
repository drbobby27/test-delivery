import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { Deliverman } from "./deliverman.model.js";
import {Employees} from "./employees.model.js"

const { STRING, INTEGER } = DataTypes

export const Order = db.define('order',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        client_name:{
            type: STRING,
            allowNull: true
        },
        address:{
            type: STRING,
            allowNull: true
        },
        phone_number: {
            type: STRING,
            allowNull: true
        },
        state:{ 
            type: STRING,
            allowNull: true
        },
        employee_id:{ 
            type: INTEGER,
            allowNull: true
        },
        deliverman_id:{ 
            type: INTEGER,
            allowNull: true
        }
        })

        Order.belongsTo(Deliverman, {foreignKey: 'deliverman_id', sourceKey: 'id'});
        Deliverman.hasMany(Order, {foreignKey: 'deliverman_id', targetId: 'id'});

        Order.belongsTo(Employees, {foreignKey: 'employee_id', sourceKey: 'id'});
        Employees.hasMany(Order, {foreignKey: 'employee_id', targetId: 'id'});




        
