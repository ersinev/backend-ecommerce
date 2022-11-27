const express = require("express");
const { ProductModel } = require("../mogoose/model/productModel");
const productRouter = express.Router();

productRouter.post("/", async (req, res) => {
  const { productName, price } = req.body;
  const doc = new ProductModel({
    productName: productName,
    price: price,
  });

  await doc.save();
  res.send({ isSuccess: true, message: "product is successfully saved" });
  console.log("product saved");
});

productRouter.get("/", async (req,res)=>{
    const filter ={}
    const AllProducts =await ProductModel.find(filter)
    res.send(AllProducts)
})

productRouter.get("/:id", async (req,res)=>{
    const ProductId = req.params.id
    
    const SingleProduct =await ProductModel.findOne({_id:ProductId})
    res.send(SingleProduct)
})

productRouter.delete("/:id", async (req,res)=>{
    const ProductId = req.params.id
    
    const SingleProduct =await ProductModel.deleteOne({_id:ProductId})
    res.send('Product deleted')
})





module.exports = productRouter;
