import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import * as queries from "../db/queries";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = queries.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error while gettinf products: ", error);
    res.status(500).json({ error: "Faile to get products" });
  }
};

export const getMyProducts = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const myProducts = await queries.getProductByUserId(userId);
    res.status(200).json(myProducts);
  } catch (error) {
    console.error("Error while fetching user Products: ", error);
    res.status(500).json({ error: "Error while getting User Products!" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "id is required in params" });

    const product = await queries.getProductById(id);

    if (!product)
      return res
        .status(404)
        .json({ error: `Product with id! ${id} is not found !` });
  } catch (error) {
    console.error("Error while fetching product with id: ", error);
    res.status(500).json({ error: "Error while getting product by Id!" });
  }
};
