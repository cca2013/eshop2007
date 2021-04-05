import express from "express";
import Product from "../models/Product.js";
import { isAuth, isAdmin } from "../util.js";

const router = express.Router();

router.get("/", async (req, res) => {
	 Product.find(function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
	 });
});

router.get("/cat/:cat", async (req, res) => {

	 Product.find({'category':req.query.cat},function(err, products) {
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
	});
console.log(req.query.cat)
});

router.get("/:id", async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "404 product not found" });
    }
    res.send(product);
});

router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews
    });
    const newProduct = await product.save();
    if (newProduct) {
        return res
            .status(201)
            .send({ message: "New Product Created", data: newProduct });
    }
    return res.status(500).send({ message: "Error in Creating Product." });
});

router.put("/:id", async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById({ _id: productId });
    if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        if (updatedProduct) {
            return res
                .status(200)
                .send({ message: "Product Updated", data: updatedProduct });
        }
    }
    return res.status(500).send({ message: "Error in Updating Product." });
});

router.delete("/:id",  async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
        await deletedProduct.remove();
        res.send({ message: "Product Deleted" });
    } else {
        res.send("Error in deleting Product.");
    }
});

export default router;
