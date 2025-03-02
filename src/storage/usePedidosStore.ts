import { create } from "zustand";

type Pedido = {
    id: string;
    pratos: { nome: string; quantidade: number }[];
}

type PedidosState = {
    pedidos: Pedido[]
    adicionarPedido: (pedido: Pedido) => void;
}

export const usePedidosStore = create<PedidosState>((set) => ({
    pedidos: [],
    adicionarPedido: (pedido) => 
        set((state) => ({ pedidos: [...state.pedidos, pedido] }))
}));