import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { storeItem } from "./storeItem";

export class Approved extends Model<InferAttributes<Approved>, InferCreationAttributes<Approved>>{
    declare ApprovedId: number;
    declare name: string;
    declare email: storeItem;
    declare message: string;
}

export function ApprovedFactory(sequelize: Sequelize) {
    Approved.init({
        ApprovedId: {
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
            tableName: 'Approved',
            sequelize,
            collate: 'utf8_general_ci',
        })
}