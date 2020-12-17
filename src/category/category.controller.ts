import { Controller, Get, Post, Request, Req, Put, Param, Delete, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreatecategoryDto } from './dtos/create-category.dto';


@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService:CategoryService){}

    @Get()
    async findCategory(){
        return await this.categoryService.findCategory();
    }

    @Get('/:id')
    async findCategoryById(@Param('id') _id: Request){
        return await this.categoryService.findCategoryById(_id)
    }
    
    @Post()
    async createCategory(@Req() request: Request){
        console.log(request)        
        return await this.categoryService.createCategory(request.body as any);
    }

    @Put('/:id')
    async updateCategory(@Param('id') id: number, @Body() category:CreatecategoryDto ){             
        return await this.categoryService.updateCategory(id, category)
    }

    @Delete('/:id')
    async deleteCategory(@Param('id') _id: number){             
        return await this.categoryService.delteCategory(_id);
    }
       
}
