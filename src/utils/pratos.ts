export type Pratos = {
    id: string
    name: string
    price: string
    image: any
}

export type Ingredientes = {
    id: string
    name: string
}


export const pratos = [
    { id: "1", name: "Salada Ravanello", price: "49,97", image: require("@/src/assets/pratos-100/salada.png") },
    { id: "2", name: "Spaguetti Gambe", price: "79,97", image: require("@/src/assets/pratos-100/spaguetti.png") },
    { id: "3", name: "Prune", price: "55,00", image: require("@/src/assets/pratos-100/prune.png") },
    { id: "4", name: "Pastry", price: "25,00", image: require("@/src/assets/pratos-100/pastry.png") },
    { id: "5", name: "Torrada Parma", price: "25,97", image: require("@/src/assets/pratos-100/parma.png") },
    { id: "6", name: "Salada Molla", price: "38,70", image: require("@/src/assets/pratos-100/molla.png") },
    { id: "7", name: "Macaron", price: "29.89", image: require("@/src/assets/pratos-100/macaron.png") },
    { id: "8", name: "Suco de Maracujá", price: "10,99", image: require("@/src/assets/pratos-100/sucoMaracuja.png") },
];

export const  ingredientes = [
    { id: "1", name: "alface"},
    { id: "2", name: "cebola"},
    { id: "3", name: "pão naan"},
    { id: "4", name: "pepino"},
    { id: "5", name: "rabanete"},
    { id: "6", name: "tomate"},
]