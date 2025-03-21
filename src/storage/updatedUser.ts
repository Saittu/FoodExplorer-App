import { create } from "zustand";
import { type Users } from "../utils/dados";


type UserState = {
    user: Partial<Users>
    updatedUser:  (users: Partial<Users>) => void
}

export const useUpdatedUser = create<UserState>((set) => ({
    user: {},

    updatedUser: (updatedData) => {
        set((state) => ({
            user: { ...state, ...updatedData}
        }))
    }
})) 