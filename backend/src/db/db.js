import  Sequelize  from "sequelize"
import dotenv from 'dotenv/config'
import { database, username, password, host, dialect, port} from '../helpers/helper.js'


export const db = new Sequelize('railway',  'root',  'dvPssZKBCp1CuVgTNRNm', {
    host:'containers-us-west-112.railway.app',
    dialect:'mysql',
    port:5662
  })

