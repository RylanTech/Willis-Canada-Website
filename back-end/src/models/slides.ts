import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class slides extends Model<InferAttributes<slides>, InferCreationAttributes<slides>>{
    declare slideId: number;
    declare imageUrl: string;
    declare message: string;
    declare url: string;
}

export function slideFactory(sequelize: Sequelize) {
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
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            freezeTableName: true,
            tableName: 'slides',
            sequelize,
            collate: 'utf8_general_ci',
        })
}