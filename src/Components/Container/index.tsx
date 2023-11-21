import React from "react";
import "./Container.scss";
import { ChildrenProps } from "../../Interface";

const Container = ({children}: ChildrenProps) => {

    return(
        <main className="Conteudo">
            {   children }
        </main>
    );
}
export default Container;
