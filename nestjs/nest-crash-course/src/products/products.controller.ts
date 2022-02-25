import { Controller, Post ,Body, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')

export class ProductsController {

    constructor(private productService:ProductsService){};

    @Post()
    addProduct(
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number,
    ){
        console.log(prodTitle,prodDesc,prodPrice);
        const generatedID=this.productService.insertProduct(
            prodTitle,
            prodDesc,
            prodPrice
        );

        return {id:generatedID};
    }

    @Get()
    getAllProducts(
    ){
        const productsList=this.productService.fetchProducts();
        return productsList;
    }

    @Get(':id')
    getProduct(
        @Param('id') prodID:string
    ){
        const product=this.productService.fetchSingleProduct(prodID);
        return product;
    }
}
