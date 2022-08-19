import { sequelize } from "../database";
import { DataTypes } from "sequelize";

export const Users = sequelize.define("Users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  roleId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "roles", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
});
