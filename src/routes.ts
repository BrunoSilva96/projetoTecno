import express from "express";
import { activitiesController } from "./controller/activitiesController";
import { authController } from "./controller/authController";
import { postController } from "./controller/postController";
import { roleController } from "./controller/roleController";
import { userController } from "./controller/userController";
import { ensureAuth } from "./middleware/auth";

const router = express.Router();

router.post("/register/auth", authController.register);
router.post("/auth/login", authController.login);

router.post("/activities", activitiesController.createActive);
router.get("/show/active", activitiesController.findactivitie);
router.put("/update/active", activitiesController.updateActivitieDescription);
router.delete("/delete/active", activitiesController.deleteActivitie);

router.get("/find/role", /*ensureAuth,*/ roleController.showUserRole);
router.post("/create/role", /*/ensureAuth,*/ roleController.createRole);
router.get("/show", /*/ensureAuth,*/ userController.show);
//router.use(ensureAuth);
//Auth desativado apenas para testar

router.post("/posts", /*/ensureAuth,*/ postController.posting);
router.put("/update/post", /*/ensureAuth,*/ postController.update);
router.delete("/delete", /*/ensureAuth,*/ postController.delete);
router.get("/show/posts/:id", postController.show);

router.delete("/delete", /*/ensureAuth,*/ userController.delete);
router.put("/update", /*/ensureAuth,*/ userController.update);
router.get("/find", /*/ensureAuth,*/ userController.findOneUser);

export { router };
