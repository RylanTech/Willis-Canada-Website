import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class events extends Model<InferAttributes<events>, InferCreationAttributes<events>>{
    declare eventId: number;
    declare title: string;
    declare date: Date;
    declare location: string;
    declare description: string;
}

export function eventFactory(sequelize: Sequelize) {
    events.init({
        eventId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
        {
            freezeTableName: true,
            tableName: 'events',
            sequelize,
            collate: 'utf8_general_ci',
        })
}