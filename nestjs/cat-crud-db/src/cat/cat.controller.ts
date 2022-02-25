import { Body, Controller, Get, Post,Put,Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';
import { async, identity } from 'rxjs';

@Controller('cat')
export class CatController {
    constructor(private catService:CatService){}

    @Get()
    index():Promise<Cat[]>{
        return this.catService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id):Promise<Cat>{
        return this.catService.findOne(id);
    }

    @Post('create')
    async create(@Body() catData:Cat):Promise<any>{
        return this.catService.create(catData);
    }

    @Put(':id/update')
    async update(@Param('id') id,@Body()catData:Cat):Promise<any>{
        catData.id=Number(id);
        console.log('updated#'+catData.id);
        return this.catService.update(catData);
    }

    @Delete(':id/delete')
    async delete(@Param('id')id):Promise<any>{
        return this.catService.delete(id);
    }
}
