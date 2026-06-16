import React, {useEffect, useState} from 'react'
import {products} from '../assets/assets'
import { toast } from 'react-toastify';

const ShopContext = React.createContext()

const ShopContextProvider = (props)=>{
    const currency = '$';
    const delivery_fee = 10;

    const [search , setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})

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

    const value= {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export {ShopContext,ShopContextProvider}

