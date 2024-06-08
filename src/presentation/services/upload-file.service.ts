import path from 'path';
import { UploadFileDto } from '../../domain/dtos/uploadfile/upload-file.dto';
import { existsSync, mkdirSync } from 'fs';
import { UuidAdapter } from '../../config/uuid.adapter';
interface UploadSingleResponse{
    type:string;
    filename:string;
}

export class UploadFileService{

    private checkFolder( folderPath:string ){
        if( !existsSync(folderPath) ){
            mkdirSync(folderPath, { recursive: true });
        }
    }
    async uploadSingle( uploadFileDto:UploadFileDto ):Promise<UploadSingleResponse>{
        const {type, files} = uploadFileDto;
        const extensionFile = files.mimetype.split("/").at(-1);
        const folderPath = path.resolve( __dirname, `../../../uploads/${ type }` );
        this.checkFolder(folderPath);

        const filename = `${ UuidAdapter.generateUUID() }.${ extensionFile }`;

        files.mv( `${ folderPath }/${ filename }` );

        return {
            type,
            filename,
        }
    }
}