export class FindAllCategoryDto {

    constructor(){}


    static findAll(): [string?, FindAllCategoryDto?] {


        return [undefined, new FindAllCategoryDto()];
    }
}
