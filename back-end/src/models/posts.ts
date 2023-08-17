import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class posts extends Model<InferAttributes<posts>, InferCreationAttributes<posts>>{
    declare postId: number;
    declare title: string
    declare message: string;
}

export function postFactory(sequelize: Sequelize) {
    posts.init({
        postId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
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
            tableName: 'posts',
            sequelize,
            collate: 'utf8_general_ci',
        })
}