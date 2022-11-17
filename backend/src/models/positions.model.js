import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import {Employees} from "./employees.model.js"


const { STRING, INTEGER } = DataTypes


         export const Positions= db.define('positions',{
       
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            name: {
                type: STRING,
                allowNull: false
            }

        })

export default Positions
            