import { Router } from "express";
import { requireAuth } from "@clerk/express";
import * as productController from "../controllers/productController";

const ProductRouter = Router();

productController.get("/", productController.getAllProducts)

export default ProductRouter;
