import  Sequelize  from "sequelize"
import dotenv from 'dotenv/config'
import { database, username, password, host, dialect, port} from '../helpers/helper.js'


export const db = new Sequelize(database,  username,  password, {
    host,
    dialect,
    port
  })

