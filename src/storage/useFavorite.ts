import { create } from "zustand"

type FavoriteStore ={
    favorites: Record<string, boolean>
    toggleFavorite: (id: string) => void
}

export const useFavorite = create<FavoriteStore>((set) => ({
    favorites: {},
    toggleFavorite: (id) => {
        set((state) => ({
            favorites: {
                ...state.favorites,
                [id]: !state.favorites[id]
            }
        }))
    }
}))