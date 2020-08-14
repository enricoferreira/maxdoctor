import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
})

export const api = {
    get(){
        return axiosInstance.get();
    }
}