import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";
import { Pratos } from "../utils/dados";

type CartContextType = {
    cart: Pratos[];
    addToCart: (prato: Pratos, count: number) => void;
    removeFromCart: (pratoId: string) => void;
    clearCart: () => void;
    cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Pratos[]>([]);

    const addToCart = (prato: Pratos, count: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === prato.id);
            const quantityToAdd = Math.max(1, count);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === prato.id
                        ? { ...item, count: (item.count || 1) + quantityToAdd }
                        : item
                );
            } else {
                return [...prevCart, { ...prato, count: quantityToAdd }];
            }
        });
    };

    const removeFromCart = (pratoId: string) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === pratoId
                        ? { ...item, count: item.count - 1 }
                        : item
                )
                .filter((item) => item.count > 0)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartCount = useMemo(() => cart.reduce((total, item) => total + item.count, 0), [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
};