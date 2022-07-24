/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customer : Customer[] = [{
        id: 1,
        email: 'a@gmail.com',
        name: 'Deny'
    },
    {
        id: 2,
        email: 'a1@gmail.com',
        name: 'Adam'
    },
    {
        id: 3,
        email: 'a2@gmail.com',
        name: 'Eva'
    }]

    findCustomerById(id : number){
        return this.customer.find(user => user.id == id)
    }

    createCustomer(createCustomerDto : CreateCustomerDto){
        this.customer.push(createCustomerDto);
    }

    findAllCustomer(){
        return this.customer;
    }
}
