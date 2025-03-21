import { create } from "zustand";
import { type Users } from "../utils/dados";

type User = {
    user: Users[]
}

type UserState = {
    users: User[]
    addUser:  (users: User) => void
}

export const useCreateUser = create<UserState>((set) => ({
    users: [],
    addUser: (user) => {
        set((state) => ({ users: [...state.users, user]}))
    }
}))