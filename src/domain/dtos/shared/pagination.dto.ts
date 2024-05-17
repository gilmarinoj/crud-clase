
export class PaginationDto{
    
    constructor(
        public offset: number,
        public limit: number,
    ){}

    static create(object:{[key:string]:any}): [string?, PaginationDto?]{
        const { offset = 0, limit = 10 } = object;

        if( isNaN(+offset) ) return ['Offset must be a number', undefined];
        if( isNaN(+limit) ) return ['Limit must be a number', undefined];

        if( +offset < 0 ) return ['Offset must be a positive number', undefined];
        if( +limit < 1 ) return ['Limit must be a positive number', undefined];

        return [undefined, new PaginationDto(+offset, +limit)];
    }
}