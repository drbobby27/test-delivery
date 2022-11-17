import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import Positions from "./positions.model.js"

const { STRING, INTEGER } = DataTypes


         export const Employees= db.define('employees',{
       
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            name: {
                type: STRING,
                allowNull: true
            },
            address: {
                type: STRING,
                allowNull: true
            },
            email: {
                type: STRING,
                allowNull: true
            },
            phoneNumber: {
                type: STRING,
                allowNull: true
            },
            password:{
                type: STRING,
                allowNull: true
            },

            role_id: {
                type: INTEGER,
                allowNull: true
            },


        })
        Employees.belongsTo(Positions, {foreignKey: 'role_id', sourceKey: 'id'});
        Positions.hasMany(Employees, {foreignKey: 'role_id', targetId: 'id'});
    export default Employees