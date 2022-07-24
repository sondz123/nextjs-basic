/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNotEmptyObject, ValidateNested, IsNumber } from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';
export class CreateCustomerDto {
    @IsNumber()
    id: number;
    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;
}