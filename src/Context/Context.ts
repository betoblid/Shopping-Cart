import {createContext} from "react";
import { TypeProvaider } from "../Interface";

//criando o contextAPI
export const MyProvider = createContext({} as TypeProvaider);
//dando um nome para ele
MyProvider.displayName = "CartItens";
