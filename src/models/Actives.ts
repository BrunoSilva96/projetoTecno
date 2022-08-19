import { DataTypes } from "sequelize";
import { sequelize } from "../database";

export const Active = sequelize.define("Activities", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  value: {
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dueDate: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
