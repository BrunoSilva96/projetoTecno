import { DataTypes } from "sequelize";
import { sequelize } from "../database";

export const Upload = sequelize.define("Upload", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  relativePath: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fileName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  postsId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "posts", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  activitiesId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "activities", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
});
