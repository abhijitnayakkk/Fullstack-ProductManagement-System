import axios from "axios"

const API_URL = "http://localhost:5678/api/v1/product"

class ProductService{
     saveProduct(product){
        return axios.post(API_URL + "/create",product);
     }
     getAllProduct(){
        return axios.get(API_URL + "/read");
     }
     getAllProductById(id){
        return axios.get(API_URL + "/read/" + id);
     }
     deleteProduct(id){
        return axios.delete(API_URL +  "/delete/" + id);
     }
     updateProduct(product){
        return axios.put(API_URL + "/update/" +product.id, product);
     }
}

export default new ProductService