export interface Pratos {
    id: string;
    name: string;
    price: string;
    count: number;
    favorite: boolean;
    imageSmall: any;
    imageLarge: any;
    description: string;
    ingredientes: { id: string; name: string }[];
    addToCart?: (prato: Pratos, count: number) => void; // Propriedade opcional, talvez?
}

export type Ingredientes = {
    id: string
    name: string
}

export type CartItem = {
    prato: Pratos[];
    quantity: number; 
    notes?: string;   
};


export const pratos = [
    { 
        id: "1", 
        name: "Salada Ravanello", 
        price: "49,97", 
        count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/salada.png"),
        imageLarge: require("@/src/assets/pratos-300/salada.png"),
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
        ingredientes: [
            { id: "1", name: "alface"},
            { id: "2", name: "cebola"},
            { id: "3", name: "pão naan"},
            { id: "4", name: "pepino"},
            { id: "5", name: "rabanete"},
            { id: "6", name: "tomate"},
        ]
    },
    { 
        id: "2", 
        name: "Spaguetti Gambe", 
        price: "79,97", count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/spaguetti.png"),
        imageLarge: require("@/src/assets/pratos-300/spaguetti.png"),
        description: "Massa com camarões e molho de tomate fresco.",
        ingredientes: [
            { id: "1", name: "Espaguete"},
            { id: "2", name: "Camarões grelhados"},
            { id: "3", name: "Alho picado"},
            { id: "4", name: "Molho de tomate rústico"},
            { id: "5", name: "Azeite de oliva"},
            { id: "6", name: "Salsinha fresca"},
        ]
    },
    { 
        id: "3", 
        name: "Prune", 
        price: "55,00", 
        count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/prune.png"),
        imageLarge: require("@/src/assets/pratos-300/prune.png"),
        description: "Ameixas caramelizadas com especiarias e creme suave.",
        ingredientes: [
            { id: "1", name: "Ameixas secas"},
            { id: "2", name: "Nozes picadas"},
            { id: "3", name: "Queijo brie"},
            { id: "4", name: "Mel"},
            { id: "5", name: "Pão torrado"},
            { id: "6", name: "Rúcula"},
        ]
    },
    { 
        id: "4", 
        name: "Pastry", 
        price: "25,00", 
        count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/pastry.png"),
        imageLarge: require("@/src/assets/pratos-300/pastry.png"),
        description: "Massa folhada recheada com creme e frutas frescas.",
        ingredientes: [
            { id: "1", name: "Massa folhada"},
            { id: "2", name: "Creme de confeiteiro"},
            { id: "3", name: "Frutas vermelhas"},
            { id: "4", name: "Açúcar de confeiteiro"},
            { id: "5", name: "Ovos"},
            { id: "6", name: "Manteiga"},
        ]
    },
    { 
        id: "5", 
        name: "Torrada Parma", 
        price: "25,97", 
        count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/parma.png"),
        imageLarge: require("@/src/assets/pratos-300/parma.png"),
        description: "Torradas crocantes com presunto parma e queijo derretido.",
        ingredientes: [
            { id: "1", name: "Pão rústico"},
            { id: "2", name: "Presunto de Parma"},
            { id: "3", name: "Queijo parmesão ralado"},
            { id: "4", name: "Rúcula fresca"},
            { id: "5", name: "Tomates-cereja"},
            { id: "6", name: "Azeite trufado"},
        ]
    },
    { 
        id: "6", 
        name: "Salada Molla", 
        price: "38,70", 
        count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/molla.png"),
        imageLarge: require("@/src/assets/pratos-300/molla.png"),
        description: "Folhas verdes, queijo e molho especial de ervas.",
        ingredientes: [
            { id: "1", name: "Alface romana"},
            { id: "2", name: "Tomates frescos"},
            { id: "3", name: "pão naan"},
            { id: "4", name: "Azeitonas pretas"},
            { id: "5", name: "Pepino fatiado"},
            { id: "6", name: "Molho de iogurte"},
        ]
    },
    { 
        id: "7", 
        name: "Macaron", 
        price: "29.89", count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/macaron.png"),
        imageLarge: require("@/src/assets/pratos-300/macaron.png"),
        description: "Doce francês crocante por fora e cremoso por dentro.",
        ingredientes: [
            { id: "1", name: "Farinha de amêndoas"},
            { id: "2", name: "Claras de ovo"},
            { id: "3", name: "Açúcar refinado"},
            { id: "4", name: "Corante alimentício"},
            { id: "5", name: "Chocolate branco"},
            { id: "6", name: "Creme de leite"},
        ]
    },
    { 
        id: "8", 
        name: "Suco de Maracujá", 
        price: "10,99", 
        count: 1, 
        favorite: false, 
        imageSmall: require("@/src/assets/pratos-100/sucoMaracuja.png"),
        imageLarge: require("@/src/assets/pratos-300/sucoMaracuja.png"),
        description: "Refrescante suco natural de maracujá com toque cítrico.",
        ingredientes: [
            { id: "1", name: "Polpa de maracujá"},
            { id: "2", name: "Água filtrada"},
            { id: "3", name: "Açúcar ou mel"},
            { id: "4", name: "Gelo"},
            { id: "5", name: "Folhas de hortelã"},
            { id: "6", name: "Limão espremido"},
        ]
    },
];

