import dotenv from 'dotenv/config'
import {v2} from 'cloudinary'

export const database = process.env.DATABASE
export const username = process.env.USERNAME
export const password = process.env.PASSWORD
export const host = process.env.host
export const dialect = process.env.dialect
export const port = process.env.port_db

export const cloudinary = v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

