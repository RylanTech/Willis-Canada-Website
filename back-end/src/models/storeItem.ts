import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class storeItem extends Model<InferAttributes<storeItem>, InferCreationAttributes<storeItem>>{
    declare itemId: number;
    declare title: string
    declare link: string;
    declare imageUrl: string;
    declare description: string;
    declare price: string;
}

export function storeItemFactory(sequelize: Sequelize) {
    storeItem.init({
        itemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'storeItems',
            sequelize,
            collate: 'utf8_general_ci',
        })
}