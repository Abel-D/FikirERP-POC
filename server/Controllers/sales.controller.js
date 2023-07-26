const express = require('express');
const router = express.Router();
const mongoose =require('mongoose');
const Sales = require('../models/sales.model');


exports.sales_add = async (req, res) =>{
    console.log(req.body);
    let totalPrice = req.quantity*req.price;
    let newSales = new Sales(
        {
            salesId: req.body.salesId,
            date: req.body.date,
            productId: req.body.productId,
            quantity: req.body.quantity,
            price: req.body.price,
            totalPrice: totalPrice
        }
    );

    try{
        await newSales.save();
        res.status(201).json(newSales);
    }
    catch(error){
        res.status(400).json({ message : error.message});
    }
};

exports.sales_getAll = async (req, res) => {
    try {
        const sales= await Product.find();
        
        res.status(200).json(sales);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

exports.sales_getById = async (req,res) => {
    const salesId = req.params.salesId;
    try {
        const sales = await Sales.findOne({salesId: salesId});
        res.status(200).json(sales);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

exports.sales_update = async (req, res) => {
    try{
        const sales = await Sales.findByIdAndUpdate(req.params.salesId, {$set: req.body});
        
        res.status(200).json(sales);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
    };

    exports.sales_delete = async (req, res)=> {
        try{
            const sales = await Sales.findByIdAndRemove(req.params.salesId);

            res.status(200).json(sales);
        } catch(error) {
            res.status(404).json({ message: error.message});
        }
    };