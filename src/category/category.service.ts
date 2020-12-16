import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './../category.entity'

@Injectable()
export class CategoryService {

    //constructor(@InjectRepository(Category) private readonly categoryRepository:Repository<Category>){}
    //constructor(@InjectRepository(Client) private clientRpository:Repository<Client>){}
    constructor(@InjectRepository(Category)
    private categoryRepo: Repository<Category>){}

    async findCategory(){
        return await this.categoryRepo.find();
    }

    async createCategory(category:Category){
        console.log(category)
        return await this.categoryRepo.save(category);
    }    
}
