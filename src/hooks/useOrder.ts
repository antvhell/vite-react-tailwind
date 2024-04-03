import { useState } from "react"
import type { OrderItem, menuItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: menuItem) => {

        const itemExist = order.find(OrderItem => OrderItem.id === item.id)
        if(itemExist) {
            const updatedOrder = order.map(OrderItem => OrderItem.id === item.id 
                ? {...OrderItem, quantity: OrderItem.quantity + 1}
                : OrderItem)
                setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem])
        }

    }

    console.log(order);



    return {
        addItem
    }
}