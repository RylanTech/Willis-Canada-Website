import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class slides extends Model<InferAttributes<slides>, InferCreationAttributes<slides>>{
    declare slideId: number;
    declare imageUrl: string;
    declare message: string;
}

export function userFactory(sequelize: Sequelize) {
    slides.init({
        slideId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            freezeTableName: true,
            tableName: 'posts',
            sequelize,
            collate: 'utf8_general_ci',
        })
}