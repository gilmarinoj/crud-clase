import { Request, Response } from "express";
import { ProductService } from '../services/product.service';
import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";
import { Validators } from "../../config/validator";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";

export class ProductController{

    constructor(
        private readonly productService: ProductService
    ){}

    create = (req:Request,res:Response)=>{
        const [error, createProduct] = CreateProductDto.create( req.body );
        if( error ) return res.status(400).json({error});
        this.productService.create(createProduct!)
        .then( product => res.json(product) )
        .catch( error => res.json(error));        
    }

    update = (req:Request,res:Response)=>{
        const id = req.params.id;
        if(!Validators.validationMongoId(id)) throw Error('Mongo ID is not valid');
        const [error, updateProduct] = UpdateProductDto.update( req.body );
        this.productService.update(updateProduct!, id!)
        .then( product => res.json(product) )
        .catch( error => res.json(error) );
    }     
            
    delete = (req:Request,res:Response)=>{
        const id = req.params.id
        if(!Validators.validationMongoId(id)) throw Error('Mongo ID is not valid');
        
        this.productService.delete(id!)
        .then( product => res.json(product) )
        .catch( error => res.json(error));
    }

    findAll = (req:Request,res:Response)=>{
        const [, paginationDto] = PaginationDto.create(req.query);
        
        this.productService.findAll(paginationDto!)
        .then( product => res.json(product))
        .catch( error => res.json(error));
    }

    findOne = (req: Request, res: Response) => {
        const id = req.params.id;
        if(!Validators.validationMongoId(id)) throw Error('Mongo ID is not valid');

        this.productService.findOne(id!)
        .then( product => res.json(product) )
        .catch( error => res.json(error) );
    }
}