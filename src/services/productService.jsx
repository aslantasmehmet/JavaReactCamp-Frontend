import axios from 'axios'

export default class ProductServiece{
    getProducts(){
        
        return axios.get("http://localhost:8050/api/products/getall")
    }

    getByProductName(productName){
        return axios.get("http://localhost:8050/api/products/getByProductName?productName="+ productName)
    }
}