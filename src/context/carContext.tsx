import React, { createContext, useState, useContext, ReactNode} from "react";
import { Pratos } from "../utils/pratos"; 

type CartContextType = {
    cart: Pratos[]
    addToCart: (prato: Pratos) => void
    cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: {children: ReactNode}) => {
    const [cart, setCart] = useState<Pratos[]>([])

    const addToCart = (prato: Pratos) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === prato.id)

            if (existingItem) {
                return prevCart.map((item) => 
                    item.id === prato.id
                        ? { ...item, count: item.count + 1}
                        : item
                )
            } else {
                return [...prevCart, { ...prato, count: 1}]
            }
        })
    }

    const cartCount = cart.reduce((total, item) => total + item.count, 0)

    return(
        <CartContext.Provider value={{ cart, addToCart, cartCount}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider")
    }
    return context
}
