
export class DeleteCategoryDto {

    constructor(
        public categoryId: number
    ) { }

    get values(){
        const returnObject: {[key:string]:any} = {};

        if( this.categoryId ) returnObject.name = this.categoryId;

        return returnObject;
    }

    static delete(object: {[key:string]:any}): [string?, DeleteCategoryDto?] {
        const { categoryId } = object;
        
        if (!categoryId) {
            return ['Missing category ID', undefined];
        }

        return [undefined, new DeleteCategoryDto(categoryId)];
    }
}
