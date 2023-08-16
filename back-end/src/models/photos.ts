import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class photos extends Model<InferAttributes<photos>, InferCreationAttributes<photos>>{
    declare photosId: number;
    declare imageUrl: string;
}

export function photosFactory(sequelize: Sequelize) {
    photos.init({
        photosId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'images',
            sequelize,
            collate: 'utf8_general_ci',
        })
}