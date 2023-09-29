import { Sequelize } from "sequelize";
// import 'dotenv/config';
import { userFactory } from "./user";
import { itemFactory } from "./items";
import { eventFactory } from "./events";
import { postFactory } from "./posts";
import { photosFactory } from "./photos";
import { slideFactory } from "./slides";
import { storeItemFactory } from "./storeItem";
import { unApprovedFactory } from "./unApproved";
import { ApprovedFactory } from "./Approved";
import 'dotenv/config';
import { AudioFactory } from "./Audio";
import { bioFactory } from "./Bio";

const dbName = process.env.DB_NAME ?? '';
const username = process.env.DB_USER ?? '';
const password = process.env.DB_PASS ?? '';

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
storeItemFactory(sequelize)
unApprovedFactory(sequelize)
ApprovedFactory(sequelize)
AudioFactory(sequelize)
bioFactory(sequelize)


export const db = sequelize;