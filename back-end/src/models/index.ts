import { Sequelize } from "sequelize";
// import 'dotenv/config';
import { userFactory } from "./user";
import { itemFactory } from "./items";
import { eventFactory } from "./events";
import { postFactory } from "./posts";
import { photosFactory } from "./photos";
import { slideFactory } from "./slides";

// const dbName = process.env.DB_NAME ?? '';
// const username = process.env.DB_USER ?? '';
// const password = process.env.DB_PASS ?? '';

const dbName = "williscanada"
const username = "root"
const password = "0624"

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

userFactory(sequelize)
itemFactory(sequelize)
eventFactory(sequelize)
postFactory(sequelize)
photosFactory(sequelize)
slideFactory(sequelize)


export const db = sequelize;