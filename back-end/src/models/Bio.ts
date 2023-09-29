import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class bio extends Model<InferAttributes<bio>, InferCreationAttributes<bio>>{
    declare bioId: number;
    declare bioText: string;
    declare bioImg: string;
}

export function bioFactory(sequelize: Sequelize) {
    bio.init({
        bioId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        bioText: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        bioImg: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'bio',
            sequelize,
            collate: 'utf8_general_ci',
        })
}