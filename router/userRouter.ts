import {Router} from "express";
import {createUser,viewAllUser,viewOneUser,deleteUser} from "../controller/userController";

const router:Router = Router();

router.route("/create-todo-user").post(createUser);
router.route("/view-All-user").get(viewAllUser);
router.route("/view-One-user/:userID").get(viewOneUser);
router.route("/delete-One-user/:userID").delete(deleteUser);

export default router;