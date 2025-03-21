import { create } from "zustand";
import { pratos, Pratos } from "../utils/dados";
import uuid from "react-native-uuid";

type NewDishStore = {
    adicionarPrato: (prato: Omit<Pratos, "id">) => void;
};

export const useNewDishe = create<NewDishStore>(() => ({
    adicionarPrato: (novoPrato) => {
        pratos.push({ ...novoPrato, id: uuid.v4() }); 
    },
}));

