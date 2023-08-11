import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class user extends Model<InferAttributes<user>, InferCreationAttributes<user>>{
    declare itemId: number;
    declare title: string
    declare link: string;
    declare imageUrl: string;
    declare releaseDate: Date;
    declare description: string;
    declare price: string;
}

export function userFactory(sequelize: Sequelize) {
    user.init({
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
        releaseDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            freezeTableName: true,
            tableName: 'items',
            sequelize,
            collate: 'utf8_general_ci',
        })
}