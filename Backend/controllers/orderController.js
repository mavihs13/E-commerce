import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing Order using COD method

const placeOrder = async(req,res)=>{

    try {
        const { userId, items, amount , address}=req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment: false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"order Placed"})



    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//placong Order using STRIP

const placeOrderStrip = async(req,res)=>{

}

// placing order using razorpay

const placeOrderRazorpay = async(req,res)=>{

}

//All orders data for admin panel

const allOrders = async(req,res)=>{
    try{

        const orders = await orderModel.find({})
        res.json({success:true,orders})
    }catch(erroe){

        res.json({success:false,message:error.message})

    }

}

// user order data for frontend

const userOrders = async(req,res)=>{

    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId}).sort({date:-1})
        res.json({success:true,orders})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// update order status from admin panel

const updateStatus = async(req,res)=>{

}

export {placeOrder , placeOrderStrip , placeOrderRazorpay , allOrders , userOrders , updateStatus}