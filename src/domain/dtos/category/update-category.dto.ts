
export class UpdateCategoryDto{
    constructor(
        public name: string,
        public description: string,
    ){}


    get values(){
        const returnObject: {[key:string]:any} = {};

        if( this.name ) returnObject.name = this.name;
        if( this.description ) returnObject.description = this.description;

        return returnObject;
    }


   
    static update( object: {[key:string]:any} ): [string?, UpdateCategoryDto?]{
        const { name, description } = object;

        if( name ){
            if( name.length < 2 ) return ['Name too short', undefined];
        }

        if( description ){
            if( description.length < 4 ) return ['Invalid description', undefined];
        }

        return [undefined, new UpdateCategoryDto(name, description)];
    }
}