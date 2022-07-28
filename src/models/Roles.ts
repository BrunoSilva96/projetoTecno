import { sequelize } from "../database"
import { DataTypes } from "sequelize"

export const Roles = sequelize.define('Rosts', {
   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    roleName: {
      allowNull: false,
      type: DataTypes.STRING
    }
})