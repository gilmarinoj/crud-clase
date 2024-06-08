import { UploadedFile } from "express-fileupload";
export class UploadFileDto{    
    constructor(
        public type : string,
        public files : UploadedFile
    ){}

    static upload( object: {[ key: string ]:any } ): [string?, UploadFileDto?]{
        const { type, files } = object;
        if( !type ) return [ 'Missing type', undefined ];
        return [ undefined, new UploadFileDto( type, files ) ];
    }

}