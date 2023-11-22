import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get('flavors')
  findAllFlavors() {
    return 'This action returns all flavors';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns coffee ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates coffee ${id} with ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes coffee ${id}`;
  }
}
