export class UpdateProductDto{
    constructor(
        public name?: string,
        public price?: number,
        public description?: string,
        public category?: string,
        public img?: string
    ){}

    static update( object: {[ key: string ]:any } ): [string?, UpdateProductDto?]{
        const { name, price, description, category, img } = object;
        return [ undefined, new UpdateProductDto( name, price, description, category, img ) ];
    }
}