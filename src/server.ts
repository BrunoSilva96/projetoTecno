import express from "express";
import { sequelize } from "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successful!!!");
  });

  console.log(`Server started successfuly at PORT ${PORT}`);
});
