/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers') export class CustomersController {
    // tai sao phai tao contructor???
    constructor(private customersService: CustomersService) {}

    @Get(':id') getCustomer(@Param('id', ParseIntPipe) id: number, @Req() req: Request, @Res() res: Response) {
        const customer = this.customersService.findCustomerById(id);
        if(customer) {
            res.status(200).send(customer);
        }
        else {
            res.status(400).send({ msg: 'Customer not found' });
        }
    }

    @Get('/seach/:id') 
    searchCustomerById(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.findCustomerById(id);
        if(customer) return customer;
        else throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);
    }

    @Get('')
    getAllCustomer(@Res() res: Response) {
        const customer = this.customersService.findAllCustomer();
        if(customer) {
            res.status(200).send(customer);
        }
        else {
            res.status(400).send({ msg: 'Customer not found' });
        }
    }

    @Post('create') 
    @UsePipes(ValidationPipe) 
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customersService.createCustomer(createCustomerDto);
    }
}
