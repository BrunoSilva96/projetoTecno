import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
   dialect: 'postgres',
   host: 'localhost',
   port: 5432,
   database: 'techUsers',
   username: 'techjr',
   password: '123456',
   define: {
      underscored: true
   }
});