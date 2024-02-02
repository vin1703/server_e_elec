require('dotenv').config();

const bodyParser = require('body-parser');

const express = require('express');

const HttpError = require('./models/http-error');

const app = express();

const userRoutes = require('./routes/user-routes');

const productRoutes = require('./routes/product-routes');

const cartRoutes = require('./routes/cart-routes');

const orderRoutes = require('./routes/order-routes');

const mongoose = require('mongoose');

// const cors = require('cors');

// app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin(s) you want to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

app.use('/api/user',userRoutes);

app.use('/api/products',productRoutes);

app.use('/api/cart',cartRoutes);

app.use('/api/orders',orderRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gaqfzi1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log("listening to 5000");
    });
}).catch(err=>{
    console.log(err);
})
