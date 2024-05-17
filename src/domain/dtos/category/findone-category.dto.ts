export class FindOneCategoryDto {

    constructor(
        public categoryId: number
    ) { }

    get values(){
        const returnObject: {[key:string]:any} = {};

        if( this.categoryId ) returnObject.name = this.categoryId;

        return returnObject;
    }

    static findOne(object: {[key:string]:any}): [string?, FindOneCategoryDto?] {
        const { categoryId } = object;
        
        if (!categoryId) {
            return ['Missing category ID', undefined];
        }

        return [undefined, new FindOneCategoryDto(categoryId)];
    }
}
