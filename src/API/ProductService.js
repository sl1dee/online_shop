import axios from "axios";

export default class ProductService {
    // static async getElectronics() {
    //     const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`)
    //     return response.data
    // }
    //
    // static async getJewelery() {
    //     const response = await axios.get(`https://fakestoreapi.com/products/category/jewelery`)
    //     return response.data
    // }
    //
    // static async getMensClothing() {
    //     const response = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
    //     return response.data
    // }
    //
    // static async getWomensClothing() {
    //     const response = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
    //     return response.data
    // }

    static async getCategory(str) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${str}`)
        return response.data
    }


}
