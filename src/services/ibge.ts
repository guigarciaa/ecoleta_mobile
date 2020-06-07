
import axios from "axios";

const apiIBGE = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
});

export default apiIBGE;
//https://servicodados.ibge.gov.br/api/v1/localidades/estados

//https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios