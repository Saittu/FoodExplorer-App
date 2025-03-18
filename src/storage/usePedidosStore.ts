import { create } from "zustand";

type Pedido = {
    id: string;
    pratos: { nome: string; quantidade: number }[];
    date: string
}


type PedidosState = {
    pedidos: Pedido[]
    statusPedidos: {[key: string]: "Pendente" | "Preparando" | "Entregue"}
    adicionarPedido: (pedido: Pedido) => void;
    atualizarStatus: (id: string, status: "Pendente" | "Preparando" | "Entregue") => void
}

const formatDate = (date: Date | string): string => {
    const d = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false 
    };

    const formattedDate = d.toLocaleString('pt-BR', options);

    const [datePart, timePart] = formattedDate.split(' ');
    const [day, month] = datePart.split('/');
    const [hours, minute] = timePart.split(':');

    return `${day}/${month} às ${hours}:${minute}`;
};


export const usePedidosStore = create<PedidosState>((set) => ({
    pedidos: [],
    statusPedidos: {},

    adicionarPedido: (pedido) =>
        set((state) => {
            const horarioPedido = formatDate(new Date())
            const dateRequested = {...pedido, date: horarioPedido}
            return{
                pedidos: [...state.pedidos, dateRequested],
                statusPedidos: { ...state.statusPedidos, [pedido.id]: "Pendente" }
            }  
        }),

    atualizarStatus: (id, status) =>
        set((state) => {
            const horarioPedido = formatDate(new Date())

            const updatedDate = state.pedidos.map((pedido) => 
                pedido.id === id
                    ? {...pedido, status, date: horarioPedido}
                    : pedido
            )

            return{
                pedidos: updatedDate,
                statusPedidos: {...state.statusPedidos, [id]: status,},
            }
        }),
}))
