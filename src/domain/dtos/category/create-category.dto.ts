export class CreateCategoryDto{
    
    constructor(
        public name: string,
        public description: string,
    ){}

    static create( object: { [key:string]:any } ): [string?, CreateCategoryDto?]{
        const { name, description } = object;

        if( !name ) return ['Missing name', undefined];
        if( name.length < 4 ) return ['Name too short', undefined];

        if( !description ) return ['Missing description', undefined];
        if( description.length < 6 ) return ['description too short', undefined];

        return [undefined, new CreateCategoryDto(name, description)];
    }
}