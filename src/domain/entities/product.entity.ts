import { StringSchemaDefinition } from "mongoose";

export class ProductEntity{
    constructor(
        public name: string,
        public price: number,
        public description: string,
        public category: string,
        public img?: string,
    ){}
}