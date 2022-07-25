/* eslint-disable prettier/prettier */

import { NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express';
export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("hello, this is middleware");
        next();
    }
}