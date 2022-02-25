import { Injectable, NotFoundException } from "@nestjs/common";

import { Product } from "./products.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const prodID = (Math.random()*Math.random()).toString();
        const newProduct = new Product(prodID, title, description, price);
        console.log(newProduct);
        this.products.push(newProduct);
        return prodID;
    }

    fetchProducts() {
        return [...this.products];
    }

    fetchSingleProduct(productID: string) {
        const product = this.products.find(prod => prod.id === productID);
        if(!product){
            throw new NotFoundException('Could not find');
        }
        return product;
    }
}