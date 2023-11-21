import  {useContext} from "react";
import { MyProvider } from "./Context";

//function responsavel por usar o Provaider
export const useProvaider = () => {
    return useContext(MyProvider);
}
