import { supabase } from "../lib/supabase";

;

async function testConnection() {
  // const { data, error } = await supabase.from("order").select("*");
    const { data, error } = await supabase.from("favoritos").select("*").limit(1);
  
  if (error) {
    console.error("Erro ao conectar:", error);
  } else {
    console.log("Conexão bem-sucedida! Dados:", data);
  }
}

async function testConnectionPost() {
    const { data, error } = await supabase.from("pratos").insert([
      { 
        name: "Salada Ravanello", 
        price: "49,97", 
        count: 1, 
        favorite: false, 
        image: "",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
        category_id: "4f73ad6d-51e3-456a-b17f-a7098cbd82bd"
    },
    ])

    if (error) {
        console.error("Erro ao conectar:", error);
      } else {
        console.log("Conexão bem-sucedida! Dados:", data);
      }
}

