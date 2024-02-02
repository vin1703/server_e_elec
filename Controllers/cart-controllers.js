const Cart = require('../models/cart');

  const getCart = async(req,res,next)=>{
    const cartItems = await Cart.find();
    res.status(201).json({cartItems:cartItems.map(item=>item.toObject({getters:true}))});
  }

  const createCartItem = async(req,res,next)=>{
    const {productId,productImage,productName,productPrice,userId} = req.body;

    const createItem = new Cart({
        productId,productImage,productName,productPrice,userId
    })
    await createItem.save();
    res.status(201).json({cartItem:createItem.toObject({getters:true})});
  }

  exports.getCart = getCart;
  exports.createCartItem = createCartItem;