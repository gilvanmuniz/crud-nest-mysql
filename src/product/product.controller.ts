import { Body, Controller, Get, Param, Post, Request, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create.product.dto'

@Controller('product')
export class ProductController {

    constructor( private readonly productService:ProductService){}

    @Get()
    async findProduct(){
        return await this.productService.findProduct();
    }

    @Get('/:id')
    async findProductById(@Param('id') id:Request){
        return await this.productService.findProductById(id);
    }

    @Post()
    async createProduct(@Body() productDto:CreateProductDto){
        return await this.productService.createProduct(productDto);
    }

    @Put('/:id')
    async updateProduct(@Param('id') id: number, @Body() productDto:CreateProductDto){
        return await this.productService.updateProduct(id, productDto);
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id:number){
        return await this.productService.deleteById(id);
    }
    
}
