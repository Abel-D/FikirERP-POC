const express = require("express");
const router = express.Router();
const mongoose =require('mongoose');
const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = async (req, res) =>{
    console.log(req.body);
    let newProduct = new Product(
        {
            //date: req.body.date,
            productId: req.body.productId,
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price
        }
    );

    try{
        await newProduct.save();
        res.status(201).json(newProduct);
    }
    catch(error){
        res.status(400).json({ message : error.message});
    }
};

exports.product_getAll = async (req, res) => {
    try {
        const item= await Product.find();
        
        res.status(200).json(item);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}