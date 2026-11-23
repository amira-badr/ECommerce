import fs from "fs";
import productModel from "../models/productModel.js";

// Add Product
const addProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Product Image Is Required"
      });
    }

    const image_filename = req.file.filename;

    const product = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category,
    });

    await product.save();

    res.json({
      success: true,
      message: "Product Added"
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};

// List Products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    res.json({
      success: true,
      data: products
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};

// Remove Product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found"
      });
    }

    fs.unlink(`uploads/${product.image}`, (err) => {
      if (err) console.log(err);
    });

    await productModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Product Removed"
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};

export { addProduct, listProducts, removeProduct };