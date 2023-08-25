import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { storeItem } from "./storeItem";

export class unApproved extends Model<InferAttributes<unApproved>, InferCreationAttributes<unApproved>>{
    declare unApprovedId: number;
    declare name: string;
    declare email: storeItem;
    declare message: string;
}

export function unApprovedFactory(sequelize: Sequelize) {
    unApproved.init({
        unApprovedId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'unApproved',
            sequelize,
            collate: 'utf8_general_ci',
        })
}