import { create } from "zustand";
import { supabase } from "@/src/lib/supabase";

type FavoriteStore = {
    favorites: Record<string, boolean>;
    toggleFavorite: (id: string) => void;
    fetchFavorites: () => Promise<void>;
};

export const useFavorite = create<FavoriteStore>((set, get) => ({
    favorites: {},

    toggleFavorite: async (id) => {
        set((state) => {
            const newFavorites = {
                ...state.favorites,
                [id]: !state.favorites[id],
            };
    
            try {
                if (newFavorites[id]) {
                    supabase.from("favoritos").upsert([{ prato_id: id }])
                        .then(response => {
                            if (response.error) {
                                console.error("Erro ao adicionar favorito:", response.error);
                            }
                        });
                } else {
                    supabase.from("favoritos").delete().eq("prato_id", id)
                        .then(response => {
                            if (response.error) {
                                console.error("Erro ao remover favorito:", response.error);
                            }
                        });
                }
            } catch (error) {
                console.error("Erro ao atualizar favoritos no Supabase:", error);
            }
    
            return { favorites: newFavorites };
        });
    },
    
    fetchFavorites: async () => {
        try {
            const { data, error } = await supabase.from("favoritos").select("prato_id");
    
            if (error) {
                console.error("Erro ao buscar favoritos:", error);
                return;
            }
    
            const favorites = data.reduce((acc, item) => {
                acc[item.prato_id] = true;
                return acc;
            }, {} as Record<string, boolean>);
    
            set({ favorites });
        } catch (error) {
            console.error("Erro ao carregar favoritos do Supabase:", error);
        }
    }
}));