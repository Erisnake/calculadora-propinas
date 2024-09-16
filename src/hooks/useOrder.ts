import { MenuItem, OrderItem } from './../types/index';
import { useState } from "react"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item : MenuItem) => {
        const itemExist = order.find(OrderItem => OrderItem.id === item.id)
        if(itemExist) {
            const updatedOrder = order.map(OrderItem => OrderItem.id === item.id ? {...OrderItem, quantity: OrderItem.quantity + 1} 
                : OrderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    } 
}
