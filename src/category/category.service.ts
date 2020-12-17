import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './../category.entity'
import { CreatecategoryDto } from './dtos/create-category.dto'

@Injectable()
export class CategoryService {

    //constructor(@InjectRepository(Category) private readonly categoryRepository:Repository<Category>){}
    //constructor(@InjectRepository(Client) private clientRpository:Repository<Client>){}
    constructor(@InjectRepository(Category)
    private categoryRepo: Repository<Category>){}

    async findCategory(){
        return await this.categoryRepo.find();
    }

    async findCategoryById(_id){
        return await this.categoryRepo.findOne(_id);
    }

    async createCategory(category:Category){       
        return await this.categoryRepo.save(category);
    }

    async updateCategory(id:number, category: Partial<CreatecategoryDto>){  
        await this.categoryRepo.update({ id }, category);
        return await this.categoryRepo.findOne({ where: { id } });     
        
    } 
    
    async delteCategory(id:number){       
        return await this.categoryRepo.delete(id);
    }   

}
