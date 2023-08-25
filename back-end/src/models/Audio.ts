import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { storeItem } from "./storeItem";

export class Audio extends Model<InferAttributes<Audio>, InferCreationAttributes<Audio>>{
    declare audioId: number;
    declare url: string;
    declare title: string;
    declare date: string;
}

export function AudioFactory(sequelize: Sequelize) {
    Audio.init({
        audioId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'Audio',
            sequelize,
            collate: 'utf8_general_ci',
        })
}