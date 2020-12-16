import { Controller, Get, Post, Request, Req } from '@nestjs/common';
import { Category } from './../category.entity'
import { CategoryService } from './category.service';


@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService:CategoryService){}

    @Get()
    async findCategory(){
        return await this.categoryService.findCategory();
    }

    @Post()
    async createCategory(@Req() request: Request){
        console.log(request)        
        return await this.categoryService.createCategory(request.body as any);
    }
       
}
