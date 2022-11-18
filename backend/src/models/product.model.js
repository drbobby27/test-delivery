import {  DataTypes } from "sequelize";
import { db } from "../db/db.js";
import { ProductCategory } from './product_category.model.js'

const { STRING, INTEGER, DOUBLE } = DataTypes

export const Product = db.define('product',{ 
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name:{
            type: STRING,
            allowNull: true
        },
        price: {
            type: DOUBLE,
            allowNull: true
        },
        long_desc:{
            type: STRING,
            allowNull: true
        },
        short_desc:{
            type: STRING,
            allowNull: true
        },
        image_url:{ 
            type: STRING,
            allowNull: true
        },
        category_id:{ 
            type: INTEGER,
            allowNull: true
        }
        })


        Product.belongsTo(ProductCategory, {foreignKey: 'category_id', sourceKey: 'id'});
        ProductCategory.hasMany(Product, {foreignKey: 'category_id', targetId: 'id'});
        
