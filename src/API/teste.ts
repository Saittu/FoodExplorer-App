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
    const { data, error } = await supabase.from("order").insert([
        {name: "teste 2", texte: "teste 2"}
    ])

    if (error) {
        console.error("Erro ao conectar:", error);
      } else {
        console.log("Conexão bem-sucedida! Dados:", data);
      }
}

testConnection();