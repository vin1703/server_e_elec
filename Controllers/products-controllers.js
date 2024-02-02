const product = require("../models/product");

const getProducts = async(req,res,next)=>{
    const products = await product.find();
    res.json({product:products.map(prod=>prod.toObject({getters:true}))});
}

const createProduct = async(req,res,next)=>{
    const {productImage,productName,productPrice,productType,productHigh,description} = req.body;

    const newProduct =  new product({
        productImage,
        productName,
        productPrice,
        productType,
        productHigh,
        description
    })
    await newProduct.save();
    res.status(201).json({product:newProduct.toObject({getters:true})});
}

exports.getProducts = getProducts;
exports.createProduct = createProduct;