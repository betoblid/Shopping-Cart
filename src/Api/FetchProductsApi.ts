import axios from "axios";
import { FetchProduct } from "../Interface";

//uma function async que faz uma consulta a api e pega os dados retornados
export async function FetchProductsApi(): Promise<FetchProduct> {
    //desestrutura o retorno e pega apenas os valores
    const {data} = await axios.get<FetchProduct>("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC");
    return data;
}