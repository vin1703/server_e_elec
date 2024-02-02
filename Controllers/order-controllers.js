const Order = require('../models/order');

  const getOrder = async(req,res,next)=>{
    const orderItems = await Order.find();
    res.status(201).json({cartItems:orderItems.map(item=>item.toObject({getters:true}))});
  }

  const createOrderItem = async(req,res,next)=>{
    const {productId,name,number,street,city,district,country,userId} = req.body;

    const createItem = new Order({
        productId,name,number,street,city,district,country,userId
    })
    await createItem.save();
    res.status(201).json({orderItem:createItem.toObject({getters:true})});
  }

  exports.getOrder = getOrder;
  exports.createOrderItem = createOrderItem;