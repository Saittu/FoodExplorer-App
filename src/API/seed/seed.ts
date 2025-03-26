import { supabase } from "../../lib/supabase";

const pratos = [
    { 
        name: "Salada Ravanello", 
        price: "49,97", 
        count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/salada.png",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
        category_id: "4f73ad6d-51e3-456a-b17f-a7098cbd82bd"
    },
    { 
        name: "Spaguetti Gambe", 
        price: "79,97", 
        count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/spaguetti.png",
        description: "Massa com camarões e molho de tomate fresco.",
        category_id: "4f73ad6d-51e3-456a-b17f-a7098cbd82bd"
     },
    { 
        name: "Prune", 
        price: "55,00", 
        count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/prune.png",
        description: "Ameixas caramelizadas com especiarias e creme suave.",
        category_id: "4f73ad6d-51e3-456a-b17f-a7098cbd82bd"
    },
    { 
        name: "Salada Molla", 
        price: "38,70", 
        count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/molla.png",
        description: "Folhas verdes, queijo e molho especial de ervas.",
        category_id: "4f73ad6d-51e3-456a-b17f-a7098cbd82bd"
    },
    { 
        name: "Pastry", 
        price: "25,00", 
        count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/pastry.png",
        description: "Massa folhada recheada com creme e frutas frescas.",
        category_id: "612c9381-0e3c-488d-acc8-f0c66d3dd855"
    },
    { 
        name: "Torrada Parma", 
        price: "25,97", 
        count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/parma.png",
        description: "Torradas crocantes com presunto parma e queijo derretido.",
        category_id: "612c9381-0e3c-488d-acc8-f0c66d3dd855"
    },
    { 
        name: "Macaron", 
        price: "29.89", count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/macaron.png",
        description: "Doce francês crocante por fora e cremoso por dentro.",
        category_id: "612c9381-0e3c-488d-acc8-f0c66d3dd855"
    },

    { 
        name: "Suco de Maracujá", 
        price: "10,99", 
        count: 1, 
        favorite: false, 
        image: "@/src/assets/pratos-300/sucoMaracuja.png",
        description: "Refrescante suco natural de maracujá com toque cítrico.",   
        category_id: "ec08c999-7557-4135-96f7-e8b6e8c09bf6"
    },
]

const ingredientes = [
        { name: "alface"},
        { name: "cebola"}, 
        { name: "pão naan"},
        { name: "pepino"},
        { name: "rabanete"},
        { name: "tomate"},

        { name: "Espaguete"},
        { name: "Camarões grelhados"},
        { name: "Alho picado"},
        { name: "Molho de tomate rústico"},
        { name: "Azeite de oliva"},
        { name: "Salsinha fresca"},

        { name: "Ameixas secas"},
        { name: "Nozes picadas"},
        { name: "Queijo brie"},
        { name: "Mel"},
        { name: "Pão torrado"},
        { name: "Rúcula"},

        { name: "Alface romana"},
        { name: "Tomates frescos"},
        { name: "pão naan"},
        { name: "Azeitonas pretas"},
        { name: "Pepino fatiado"},
        { name: "Molho de iogurte"},

        { name: "Massa folhada"},
        { name: "Creme de confeiteiro"},
        { name: "Frutas vermelhas"},
        { name: "Açúcar de confeiteiro"},
        { name: "Ovos"},
        { name: "Manteiga"},   
        
        { name: "Pão rústico"},
        { name: "Presunto de Parma"},
        { name: "Queijo parmesão ralado"},
        { name: "Rúcula fresca"},
        { name: "Tomates-cereja"},
        { name: "Azeite trufado"},  
        
        { name: "Farinha de amêndoas"},
        { name: "Claras de ovo"},
        { name: "Açúcar refinado"},
        { name: "Corante alimentício"},
        { name: "Chocolate branco"},
        { name: "Creme de leite"}, 
        
        { name: "Polpa de maracujá"},
        { name: "Água filtrada"},
        { name: "Açúcar ou mel"},
        { name: "Gelo"},
        { name: "Folhas de hortelã"},
        { name: "Limão espremido"},
]

async function seedPratos() {
    try{
        console.log("Inserindo pratos...");

        const { data: pratosData, error: pratosError  } = await supabase.from("pratos").insert(pratos).select("id")

        if (pratosError) {
            console.error("Erro ao inserir pratos:", pratosError);
            throw new Error("Erro ao inserir pratos");
        }
        if (!pratosData || pratosData.length === 0) throw new Error("Nenhum prato foi inserido");

        console.log("Inserindo ingredientes...");

        const { data: ingredientesData, error: ingredientesError } = await supabase.from("ingredientes").insert(ingredientes).select("id")

        if (ingredientesError) {
            console.error("Erro ao inserir ingredientes:", ingredientesError);
            throw new Error("Erro ao inserir ingredientes");
        }
        if (!ingredientesData || ingredientesData.length === 0) throw new Error("Nenhum ingrediente foi inserido");

        console.log("Inserindo pratos com ingredientes...");
        const pratoIngredientes = [
            { prato_id: pratosData[0].id, ingrediente_id: ingredientesData[0].id }, 
            { prato_id: pratosData[0].id, ingrediente_id: ingredientesData[1].id }, 
            { prato_id: pratosData[0].id, ingrediente_id: ingredientesData[2].id }, 
            { prato_id: pratosData[0].id, ingrediente_id: ingredientesData[3].id }, 
            { prato_id: pratosData[0].id, ingrediente_id: ingredientesData[4].id }, 
            { prato_id: pratosData[0].id, ingrediente_id: ingredientesData[5].id }, 

            { prato_id: pratosData[1].id, ingrediente_id: ingredientesData[6].id }, 
            { prato_id: pratosData[1].id, ingrediente_id: ingredientesData[7].id }, 
            { prato_id: pratosData[1].id, ingrediente_id: ingredientesData[8].id }, 
            { prato_id: pratosData[1].id, ingrediente_id: ingredientesData[9].id }, 
            { prato_id: pratosData[1].id, ingrediente_id: ingredientesData[10].id }, 
            { prato_id: pratosData[1].id, ingrediente_id: ingredientesData[11].id }, 

            { prato_id: pratosData[2].id, ingrediente_id: ingredientesData[12].id }, 
            { prato_id: pratosData[2].id, ingrediente_id: ingredientesData[13].id }, 
            { prato_id: pratosData[2].id, ingrediente_id: ingredientesData[14].id }, 
            { prato_id: pratosData[2].id, ingrediente_id: ingredientesData[15].id }, 
            { prato_id: pratosData[2].id, ingrediente_id: ingredientesData[16].id }, 
            { prato_id: pratosData[2].id, ingrediente_id: ingredientesData[17].id }, 

            { prato_id: pratosData[3].id, ingrediente_id: ingredientesData[18].id }, 
            { prato_id: pratosData[3].id, ingrediente_id: ingredientesData[19].id }, 
            { prato_id: pratosData[3].id, ingrediente_id: ingredientesData[20].id }, 
            { prato_id: pratosData[3].id, ingrediente_id: ingredientesData[21].id }, 
            { prato_id: pratosData[3].id, ingrediente_id: ingredientesData[22].id }, 
            { prato_id: pratosData[3].id, ingrediente_id: ingredientesData[23].id }, 

            { prato_id: pratosData[4].id, ingrediente_id: ingredientesData[24].id }, 
            { prato_id: pratosData[4].id, ingrediente_id: ingredientesData[25].id }, 
            { prato_id: pratosData[4].id, ingrediente_id: ingredientesData[26].id }, 
            { prato_id: pratosData[4].id, ingrediente_id: ingredientesData[27].id }, 
            { prato_id: pratosData[4].id, ingrediente_id: ingredientesData[28].id }, 
            { prato_id: pratosData[4].id, ingrediente_id: ingredientesData[29].id }, 

            { prato_id: pratosData[5].id, ingrediente_id: ingredientesData[30].id }, 
            { prato_id: pratosData[5].id, ingrediente_id: ingredientesData[31].id }, 
            { prato_id: pratosData[5].id, ingrediente_id: ingredientesData[32].id }, 
            { prato_id: pratosData[5].id, ingrediente_id: ingredientesData[33].id }, 
            { prato_id: pratosData[5].id, ingrediente_id: ingredientesData[34].id }, 
            { prato_id: pratosData[5].id, ingrediente_id: ingredientesData[35].id }, 

            { prato_id: pratosData[6].id, ingrediente_id: ingredientesData[36].id }, 
            { prato_id: pratosData[6].id, ingrediente_id: ingredientesData[37].id }, 
            { prato_id: pratosData[6].id, ingrediente_id: ingredientesData[38].id }, 
            { prato_id: pratosData[6].id, ingrediente_id: ingredientesData[39].id }, 
            { prato_id: pratosData[6].id, ingrediente_id: ingredientesData[40].id }, 
            { prato_id: pratosData[6].id, ingrediente_id: ingredientesData[41].id }, 

            { prato_id: pratosData[7].id, ingrediente_id: ingredientesData[42].id }, 
            { prato_id: pratosData[7].id, ingrediente_id: ingredientesData[43].id }, 
            { prato_id: pratosData[7].id, ingrediente_id: ingredientesData[44].id }, 
            { prato_id: pratosData[7].id, ingrediente_id: ingredientesData[45].id }, 
            { prato_id: pratosData[7].id, ingrediente_id: ingredientesData[46].id }, 
            { prato_id: pratosData[7].id, ingrediente_id: ingredientesData[47].id }, 
        ];

        console.log("pratosIngredientes adicionado");
        const { error: pratoIngredientesError } = await supabase
            .from("pratos_ingredientes")
            .insert(pratoIngredientes);

        if (pratoIngredientesError) {
            console.error("Erro ao associar pratos com ingredientes:", pratoIngredientesError);
            throw new Error("Erro ao associar pratos com ingredientes");
        }
    
        console.log("Pratos e ingredientes inseridos com sucesso!");
    }catch(e){
        throw new Error("Erro ao inserir dados");
    }


}

seedPratos()