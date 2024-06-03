
export class CreateProductDto{
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public description: string,
        public category: string,
        public img?: string
    ){}

    static create( object: {[key: string]:any } ): [string?, CreateProductDto?]{
        const { name, price, description, category, img } = object;

        if( !name ) return ['Missing name', undefined];
        if( name.length < 4 ) return ['Name too short', undefined];

        if( !price ) return ['Missing price', undefined];
        
        if( !description ) return ['Missing description', undefined];
        if ( description.length < 4 ) return ['Description too short', undefined];

        if ( !category ) return ['Missing category', undefined]

        return [ undefined, new CreateProductDto(
            name,
            price,
            description,
            category,
            img
        )];
    }
};