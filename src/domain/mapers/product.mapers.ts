import { ProductEntity } from '../entities/product.entity';
import { Validators } from '../../config/validator';
export class ProductMaper{
    static FromJSON( object: {[ key: string ]: any} ): ProductEntity{
        const { id, name, price, description, category, img  } = object;

        if( !Validators.validationMongoId(id) ) throw Error('error');
        if( !name ) throw Error('error');
        if( !price ) throw Error('error');
        if( !description ) throw Error('error');
        if( !category ) throw Error('error')
            
        return new ProductEntity(id, name, price, description, category);
    }
}