import { Injectable, Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create.product.dto';
import { Product } from './product.entity'

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product)
     private productRepository:Repository<Product>){}

    async findProduct(){
        return this.productRepository.find();
    }

    async findProductById(_id){
        return this.productRepository.findOne(_id);
    }

    async createProduct(productDto:CreateProductDto){
        return this.productRepository.save(productDto);   
    }

    async updateProduct(id:number, productDto:Partial<CreateProductDto>){
         await this.productRepository.update( { id }, productDto); 
         return await this.productRepository.findOne({ where:{ id } }) ;  
    }

    async deleteById(id:number) {
        return await this.productRepository.delete(id);
    }

}




