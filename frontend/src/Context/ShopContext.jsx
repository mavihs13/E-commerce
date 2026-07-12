import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../App.jsx'; // Import the backendUrl from App.jsx


const ShopContext = React.createContext()

const ShopContextProvider = (props)=>{
    const currency = '$';
    const delivery_fee = 10;

    

    console.log("Backend URL:", backendUrl); // Log the backend URL to verify it's being read correctly

    const [search , setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})

    const [products,setProducts] = useState([])


    const navigate = useNavigate();

    const addToCart = async (itemId, size)=>{
        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let carData = structuredClone(cartItems);

        if(carData[itemId]){
            if(carData[itemId][size]){
                carData[itemId][size] +=1;
            }else{
                carData[itemId][size] = 1;
            }
        }else{
            carData[itemId]={};
            carData[itemId][size]=1;
        }
        setCartItems(carData);
    }

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId,size,quantity)=>{
        let carData  = structuredClone(cartItems);
        carData[itemId][size]=quantity;
        setCartItems(carData);
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id===items)
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }catch(error){
                    
                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
    try {
        console.log("Fetching products...");

        const response = await axios.get(backendUrl + "/api/product/list");

        console.log("Full Response:", response);
        console.log("Response Data:", response.data);

        if (response.data.success) {
            console.log("Products:", response.data.products);
            setProducts(response.data.products);
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
};
    useEffect(()=>{
        getProductsData();
    },[])



    const value= {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,
        navigate,
        backendUrl
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export {ShopContext,ShopContextProvider}

