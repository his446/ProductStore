import { Router } from "express";
import { syncUser } from "../controllers/userController";
import { requireAuth } from "@clerk/express";

const UserRouter = Router();

UserRouter.post("/sync", requireAuth(), syncUser);

export default UserRouter;
