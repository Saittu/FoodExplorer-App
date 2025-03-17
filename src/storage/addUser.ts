import { create } from "zustand";

type User = {
    id: string
    name: string
    email: string
    password: string
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