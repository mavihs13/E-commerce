import React from 'react'
import { useState } from 'react'

const Orders = () => {

  const [orders,setOrders] = useState([])

  const fetchAllOrders = async()=>{

  }
  useEffect(()=>{
    fetchAllOrders()
  },[token])


  return (
    <div>Orders</div>
  )
}

export default Orders